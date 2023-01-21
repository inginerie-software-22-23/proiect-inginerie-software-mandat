import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Subscription } from 'rxjs';
import { MyMentorsModel } from 'src/app/components/interface/my-mentors-model';
import { ReviewForSave } from 'src/app/components/interface/review-for-save';
import { StarsModel } from 'src/app/components/interface/stars-model';
import { DialogAddReviewByStudentComponent } from 'src/app/components/shared/dialog-add-review-by-student/dialog-add-review-by-student.component';
import { DialogViewStudentReviewsComponent } from 'src/app/components/shared/dialog-view-student-reviews/dialog-view-student-reviews.component';
import { AccountService } from 'src/app/services/account.service';
import { MentorService } from 'src/app/services/mentor.service';
import { ReviewService } from 'src/app/services/review.service';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-my-mentors',
  templateUrl: './my-mentors.component.html',
  styleUrls: ['./my-mentors.component.scss']
})
export class MyMentorsComponent implements OnInit{
  // public sub: Subscription = new Subscription;
  // public id: any | undefined;
  public emailSt?: string;
  public mentors: MyMentorsModel[] = [];
  public starsForMentors:Array<[number,string]>=[];// number[]=[];
  public starsForMentorsAux:Array<[number,string]>=[];
  // public username?:string;
  // public phoneNumber?:string;
  // public city?: string;
  // public county?: string;
  // public addressInfo?: string;
  // public bio?:string;
  // public subject?:string;
  // public canEdit: boolean = true;
  // public index: number = 0;

  // public message?: string;
  // public starsNumber?: number;
  // public reviewStatus?: string;
  // public emailMentor?:string;

  // public idStudent: any;
  // public counter: number = -1;
  // public counter2: number = -1;

  public sortByStarsAsc: boolean = true;
  public sortByNameAsc: boolean = true;

  constructor(
    private reviewService: ReviewService,
    private myStudentService: StudentService,
    private cookie: CookieService,
    private dialog: MatDialog
  ){}
  ngOnInit(): void {
    // if(this.cookie.get('Rol') == 'Student')
    //   this.canEdit = true;
    //   else
    //   this.canEdit = false;
    
    this.emailSt = this.cookie.get('Email');
    if(this.emailSt){
      this.myStudentService.getMentorsForStudent(this.emailSt).subscribe(
        (result: MyMentorsModel[]) =>{
          console.log(result);
          this.mentors = result;
         
          for(let mentor of this.mentors)
          {
            console.log(mentor.email);
            this.reviewService.getMentorsStars(mentor.email).subscribe(
              (result:number) => {
                console.log(result);
                this.starsForMentors.push([result,mentor.email]);
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

  public sortedStarsAscending(){
    this.sortByStarsAsc = true;
    this.starsForMentors.sort((a, b) => {
      return a[0] - b[0];
    });

    this.mentors.sort((a, b) => {
      let aIndex = this.starsForMentors.findIndex(([index, email]) => email === a.email);
      let bIndex = this.starsForMentors.findIndex(([index, email]) => email === b.email);
      return aIndex - bIndex;
    });
  }

  public sortedStarsDescending(){
    this.sortByStarsAsc = false;
    this.starsForMentors.sort((a, b) => {
      return b[0] - a[0];
    });

    this.mentors.sort((a, b) => {
      let aIndex = this.starsForMentors.findIndex(([index, email]) => email === a.email);
      let bIndex = this.starsForMentors.findIndex(([index, email]) => email === b.email);
      return aIndex - bIndex;
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
