import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Subscription } from 'rxjs';
import { MyMentorsModel } from 'src/app/components/interface/my-mentors-model';
import { MentorService } from 'src/app/services/mentor.service';
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

  constructor(
    private myMentorsService: MentorService,
    private myStudentService: StudentService,
    private route: ActivatedRoute,
    private cookie: CookieService
  ){}
  ngOnInit(): void {
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

}
