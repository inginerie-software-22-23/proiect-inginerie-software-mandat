import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Subscription } from 'rxjs';
import { MyMentorsModel } from 'src/app/components/interface/my-mentors-model';
import { ReviewForSave } from 'src/app/components/interface/review-for-save';
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

  constructor(
    private accountService: AccountService,
    private reviewService: ReviewService,
    private myMentorsService: MentorService,
    private myStudentService: StudentService,
    private route: ActivatedRoute,
    private cookie: CookieService
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
  public SaveReview(emailMentor:string,message: string){ //does not work yet
    var idStudent = this.accountService.getGuidByEmail(this.cookie.get('Email'));
    var idMentor = this.accountService.getGuidByEmail(emailMentor);
    var starsNumber = 2;
    var messageReview = message;
    var reviewStatus = "mentor";

    let review: ReviewForSave = {message: messageReview,
      starsNumber:starsNumber,
      mentorId: idMentor,
      studentId: idStudent,
      reviewStatus:reviewStatus};
    this.reviewService.createReview(review);
  }

  public EditReview(emailMentor:string, message: string){

  }

}
