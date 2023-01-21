import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { CookieService } from 'ngx-cookie-service';
import { MentorModel } from 'src/app/components/interface/mentor-model';
import { DialogViewStudentReviewsComponent } from 'src/app/components/shared/dialog-view-student-reviews/dialog-view-student-reviews.component';
import { ReviewService } from 'src/app/services/review.service';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-my-mentors',
  templateUrl: './my-mentors.component.html',
  styleUrls: ['./my-mentors.component.scss']
})

export class MyMentorsComponent implements OnInit{
  public emailSt?: string;
  public mentors: MentorModel[] = [];
  public sortByStarsAsc: boolean = true;
  public sortByNameAsc: boolean = true;

  constructor(
    private reviewService: ReviewService,
    private myStudentService: StudentService,
    private cookie: CookieService,
    private dialog: MatDialog
  ){}

  ngOnInit(): void {
    this.emailSt = this.cookie.get('Email');
    if(this.emailSt){
      this.myStudentService.getMentorsForStudent(this.emailSt).subscribe(
      (result: MentorModel[]) => {
        console.log(result);
        this.mentors = result;
        
        for(let mentor of this.mentors) {
          console.log(mentor.email);
          this.reviewService.getMentorsStars(mentor.email).subscribe(
            (result:number) => {
              console.log(result);
              mentor.numberOfStars = result;
            },
            (error) => {
              console.error(error);
            });
        }

        this.sortByNameASC();
        this.sortByNameAsc = true;
      },
      (error) => {
        console.error(error);
      }
      );
    }
  }

  public sortByNameASC() {
    this.sortByNameAsc = true;
    this.mentors.sort((a, b) => {
      return a.username.localeCompare(b.username);
    });
  }

  public sortByNameDESC() {
    this.sortByNameAsc = false;
    this.mentors.sort((a, b) => {
        return b.username.localeCompare(a.username);
    });
  }

  public sortedStarsAscending() {
    this.sortByStarsAsc = true;
    this.mentors.sort((a, b) => {
      return (a.numberOfStars !== undefined? a.numberOfStars : 0) - (b.numberOfStars !== undefined? b.numberOfStars : 0);
    });
  }

  public sortedStarsDescending() {
    this.sortByStarsAsc = false;
    this.mentors.sort((a, b) => {
      return (b.numberOfStars !== undefined? b.numberOfStars : 0) - (a.numberOfStars !== undefined? a.numberOfStars : 0);
    });
  }

  public getMyReviews(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '1000px';
    dialogConfig.height = '900px';

    const dialog = this.dialog.open(DialogViewStudentReviewsComponent,dialogConfig);
    dialog.afterClosed().subscribe((result) =>{
      if(result){
        this.mentors = result;
      }
    });
  }
}
