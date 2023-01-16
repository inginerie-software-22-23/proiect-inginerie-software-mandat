import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Subscription } from 'rxjs';
import { MyMentorsModel } from 'src/app/components/interface/my-mentors-model';
import { MentorService } from 'src/app/services/mentor.service';

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
  
  constructor(
    private myMentorsService: MentorService,
    private route: ActivatedRoute,
    private cookie: CookieService
  ){}
  ngOnInit(): void {
  //  this.email = this.cookie.get('Email');
  //  this.id = this.myMentorsService.getIdForMentor(this.email);
  //  if(this.id){

  //   //this.getAllMyMentors(this.id);
  //  this.myMentorsService.getMyMentors(this.id).subscribe(
  //   (result: MyMentorsModel[]) => {
  //     console.log(result);
  //     this.mentors = result;
  //   },
  //   (error) => {
  //     console.error(error);
  //   }
  //  );
  //  }
  }

}
