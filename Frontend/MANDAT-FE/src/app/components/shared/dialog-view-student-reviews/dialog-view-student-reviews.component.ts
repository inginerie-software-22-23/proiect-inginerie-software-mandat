import { Component, OnInit,Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Guid } from 'guid-typescript';
import { CookieService } from 'ngx-cookie-service';
import { AccountService } from 'src/app/services/account.service';
import { ReviewService } from 'src/app/services/review.service';
import { ReviewEdit } from '../../interface/review-edit';
import { MyReviews } from '../../interface/my-reviews';

@Component({
  selector: 'app-dialog-view-student-reviews',
  templateUrl: './dialog-view-student-reviews.component.html',
  styleUrls: ['./dialog-view-student-reviews.component.scss']
})
export class DialogViewStudentReviewsComponent implements OnInit{

  public reviews: MyReviews[]=[];
  public reviewEdit: ReviewEdit[] = [];
  public displayedColumns = ['message','starsNumber','mentorName', 'studentName','edit'];
  public emailUser: string | undefined;
  public role: string = '';
  public count: number = 0;
  constructor(
    private dialogRef: MatDialogRef<DialogViewStudentReviewsComponent>,
    private accountService: AccountService,
    private reviewService: ReviewService,
    private dialog: MatDialog,
    public cookie: CookieService,
    //public canEdit: boolean = false,
    @Inject(MAT_DIALOG_DATA) public date: any
  ){

    // if(data){
    //   var idStudent = this.accountService.getGuidByEmail(this.cookie.get('Email'))
    //   this.reviewService.viewMentorsReview( )
     }
  ngOnInit(){
    
    this.emailUser = this.cookie.get('Email');
    this.role = this.cookie.get('Rol');
    console.log(this.emailUser);

    if (this.role == "student") {
      this.reviewService.getAllStudentReviews(this.emailUser).subscribe(
        (result: MyReviews[]) => {
          console.log(result);
          this.reviews = result;
        },
        (error) => {
          console.error(error);
        }
       );

      this.displayedColumns = ['message','starsNumber','mentorName','edit'];
    } else if (this.role== "mentor") {
      this.reviewService.getAllMentorReviews(this.emailUser).subscribe(
        (result: MyReviews[]) => {
          console.log(result);
          this.reviews = result;
        },
        (error) => {
          console.error(error);
        }
       );
      this.displayedColumns = ['message','starsNumber', 'studentName','edit'];
    }  
  }

  public editReview(id:any,message: string){
    this.count ++;
    if(this.count % 2 != 0)
    { 
      let div = document.getElementById(id);
     if (div != null)
      div.removeAttribute("readonly");
      
    }
    else
      {
        this.reviewService.editReview(id, message).subscribe(
        (result) =>{
          console.log(result);
        },
        (error) => {
          console.log(error);
        }
        );
      }
  }
    
  }


