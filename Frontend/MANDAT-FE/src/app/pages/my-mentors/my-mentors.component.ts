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
  public sub: Subscription = new Subscription;
  public id: any | undefined;
  public emailSt?: string;
  public mentors: MyMentorsModel[] = [];
  public starsForMentors:Array<[number,string]>=[];// number[]=[];
  public starsForMentorsAux:Array<[number,string]>=[];
  public username?:string;
  public phoneNumber?:string;
  public city?: string;
  public county?: string;
  public addressInfo?: string;
  public bio?:string;
  public subject?:string;
  public canEdit: boolean = true;
  public index: number = 0;

  public message?: string;
  public starsNumber?: number;
  public reviewStatus?: string;
  public emailMentor?:string;

  public idStudent: any;
  public counter: number = -1;
  public counter2: number = -1;
  constructor(
    private accountService: AccountService,
    private reviewService: ReviewService,
    private myMentorsService: MentorService,
    private myStudentService: StudentService,
    private route: ActivatedRoute,
    private cookie: CookieService,

    private dialog: MatDialog
  ){}
  ngOnInit(): void {
    if(this.cookie.get('Rol') == 'Student')
      this.canEdit = true;
      else
      this.canEdit = false;
    
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
                  //console.log(this.starsForMentors);
                  //this.index++;

                },
                (error) => {
                  console.error(error);
                }
                );
            }
        },
        (error) => {
          console.error(error);
        }
        );

        
    }
  }


  public sortByName() {
    this.mentors.sort((a, b) => {
      return a.username.localeCompare(b.username);
    });
  }
public sortByNameDesc() {
  this.mentors.sort((a, b) => {
      return b.username.localeCompare(a.username);
  });
}

public sorted(){
  
  this.counter++;
  if(this.counter % 2 != 0)
  {
    var rez = this.sortByName();
  }
  else{
    var rez = this.sortByNameDesc();
  }
  this.starsForMentorsAux = [];
      for (let i = 0; i < this.mentors.length; i++) {//m1 m2 m3
        for (let j = 0; j < this.starsForMentors.length; j++) { //st1,m1 st2,m2 st3,m3
          if (this.starsForMentors[j][1] == this.mentors[i].email) {
            this.starsForMentorsAux.push([this.starsForMentors[j][0], this.mentors[i].email])
          }
        }
      }
      console.log(this.starsForMentorsAux);
      this.starsForMentors.length=0;
      this.starsForMentors = [...this.starsForMentorsAux];
  return rez;
}
public sortedStarsAscending(){
  this.starsForMentors.sort((a, b) => {
    return a[0] - b[0];
  });
}
public sortedStarsDescending(){
  this.starsForMentors.sort((a, b) => {
    return b[0] - a[0];
  });
}
public sortedStars(){
  this.counter2++;
  if(this.counter2 % 2 != 0)
  {
    var rez = this.sortedStarsAscending();
  }
  else{
    var rez = this.sortedStarsDescending();
  }

  this.mentors.sort((a, b) => {
    let aIndex = this.starsForMentors.findIndex(([index, email]) => email === a.email);
    let bIndex = this.starsForMentors.findIndex(([index, email]) => email === b.email);
    return aIndex - bIndex;
  });

  return rez;
}

 public getMyReviews(){
  const dialogConfig = new MatDialogConfig();
  dialogConfig.width = '1000px';
  dialogConfig.height = '1000px';

  const dialog = this.dialog.open(DialogViewStudentReviewsComponent,dialogConfig);
  dialog.afterClosed().subscribe((result) =>{
    if(result){
      this.mentors=result;
    }
  });

  
 }

  public AddReview(i:number){ //does not work yet
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '550px';
    dialogConfig.height = '770px';
    dialogConfig.data = {mentor: this.mentors[i]}
    const dialog = this.dialog.open(DialogAddReviewByStudentComponent, dialogConfig);
    dialog.afterClosed().subscribe((result) =>{
      if(result){
        window.location.reload();
        this.sortByName();
      }
    });
  }


}
