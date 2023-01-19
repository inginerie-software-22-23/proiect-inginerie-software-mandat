import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Subscription } from 'rxjs';
import { MyMentorsModel } from 'src/app/components/interface/my-mentors-model';
import { ReviewForSave } from 'src/app/components/interface/review-for-save';
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
  public email?: string;
  public mentors: MyMentorsModel[] = [];
  public username?:string;
  public phoneNumber?:string;
  public city?: string;
  public county?: string;
  public addressInfo?: string;
  public bio?:string;
  public subject?:string;
  public canEdit: boolean = true;

  public message?: string;
  public starsNumber?: number;
  public reviewStatus?: string;
  public emailMentor?:string;

  public idStudent: any;
  public counter: number = 0;
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
    
    this.email = this.cookie.get('Email');
    if(this.email){
      this.myStudentService.getMentorsForStudent(this.email).subscribe(
        (result: MyMentorsModel[]) =>{
          console.log(result);
          this.mentors = result;
          // this.username = this.mentors[1].username;
          // this.phoneNumber = this.mentors[1].phoneNumber;
          // this.city = this.mentors[1].city;
          // this.county = this.mentors[1].county;
          // this.addressInfo = this.mentors[1].addressInfo;
          // this.bio = this.mentors[1].bio;
          // this.subject = this.mentors[1].subject;
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
  if(this.counter % 2 == 0)
  {
    var rez = this.sortByName();
  }
  else{
    var rez = this.sortByNameDesc();
  }
  return rez;
}

public sortedStars(){
  
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
      }
    });
  }


}
