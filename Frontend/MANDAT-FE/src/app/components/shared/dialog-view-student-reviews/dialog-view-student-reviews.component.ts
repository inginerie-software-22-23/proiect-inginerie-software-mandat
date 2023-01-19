import { Component, OnInit,Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Guid } from 'guid-typescript';
import { CookieService } from 'ngx-cookie-service';
import { AccountService } from 'src/app/services/account.service';
import { ReviewService } from 'src/app/services/review.service';
import { ReviewEdit } from '../../interface/review-edit';
import { ReviewsByStudent } from '../../interface/reviews-by-student';

@Component({
  selector: 'app-dialog-view-student-reviews',
  templateUrl: './dialog-view-student-reviews.component.html',
  styleUrls: ['./dialog-view-student-reviews.component.scss']
})
export class DialogViewStudentReviewsComponent implements OnInit{

  public reviews: ReviewsByStudent[]=[];
  public reviewEdit: ReviewEdit[] = [];
  public displayedColumns = ['message','starsNumber','mentorName','edit']
  public emailStudent: string | undefined;
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
    
    this.emailStudent =this.cookie.get('Email');
    console.log(this.emailStudent);
     this.reviewService.getAllStudentReviews(this.emailStudent).subscribe(
      (result: ReviewsByStudent[]) => {
        console.log(result);
        this.reviews = result;
      },
      (error) => {
        console.error(error);
      }
     );
  }

  public editReview(id:any,message: string){
    this.count ++;
    if(this.count %2 != 0)
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


