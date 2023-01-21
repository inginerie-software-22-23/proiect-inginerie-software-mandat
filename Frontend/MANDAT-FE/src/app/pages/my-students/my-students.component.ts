import { Component } from '@angular/core';
import { MentorService } from 'src/app/services/mentor.service';
import { StudentModel } from 'src/app/components/interface/student-model';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DialogViewStudentReviewsComponent } from 'src/app/components/shared/dialog-view-student-reviews/dialog-view-student-reviews.component';
import { CookieService } from 'ngx-cookie-service';
import { ReviewService } from 'src/app/services/review.service';

@Component({
  selector: "app-my-students",
  templateUrl: "./my-students.component.html",
  styleUrls: ["./my-students.component.scss"],
})
export class MyStudentsComponent {

  public students: StudentModel[] = [];
  public email: string = "";
  public starsForStudents:Array<[number,string]> = [];
  public starsForStudentsAux:Array<[number,string]> = [];
  public sortByStarsAsc: boolean = true;
  public sortByNameAsc: boolean = true;
  
  constructor(
    private mentorService: MentorService,
    private reviewService: ReviewService,
    private cookieService: CookieService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.email = this.cookieService.get('Email');
    console.log(this.email);
    this.mentorService.getMyStudents(this.cookieService.get('Email')).subscribe(
      (response) => {
        console.log(response);
        this.students = response;

        for(let student of this.students) {
          console.log(student.email);
          this.reviewService.getStudentStars(student.email).subscribe(
            (result:number) => {
              console.log(result);
              this.starsForStudents.push([result, student.email]);
              student.numberOfStars = result;
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

  public sortByNameASC() {
    this.sortByNameAsc = true;
    this.students.sort((a, b) => {
        return a.username.localeCompare(b.username);
    });
  }

  public sortByNameDESC() {
    this.sortByNameAsc = false;
    this.students.sort((a, b) => {
        return b.username.localeCompare(a.username);
    });
  }

  public sortedStarsAscending() {
    this.sortByStarsAsc = true;
    this.starsForStudents.sort((a, b) => {
      return a[0] - b[0];
    });

    this.students.sort((a, b) => {
      let aIndex = this.starsForStudents.findIndex(([index, email]) => email === a.email);
      let bIndex = this.starsForStudents.findIndex(([index, email]) => email === b.email);
      return aIndex - bIndex;
    });
  }

  public sortedStarsDescending() {
    this.sortByStarsAsc = false;
    this.starsForStudents.sort((a, b) => {
      return b[0] - a[0];
    });

    this.students.sort((a, b) => {
      let aIndex = this.starsForStudents.findIndex(([index, email]) => email === a.email);
      let bIndex = this.starsForStudents.findIndex(([index, email]) => email === b.email);
      return aIndex - bIndex;
    });
  }

  public getMyReviews() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '1000px';
    dialogConfig.height = '900px';
  
    const dialog = this.dialog.open(DialogViewStudentReviewsComponent, dialogConfig);
    dialog.afterClosed().subscribe((result) =>{
      if(result){
        this.students = result;
      }
    }); 
  }
}
