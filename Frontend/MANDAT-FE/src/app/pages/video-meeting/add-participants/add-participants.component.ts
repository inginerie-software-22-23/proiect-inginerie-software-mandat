import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import {MeetingModel} from 'src/app/components/interface/meeting-model';
import { VideoCallService } from 'src/app/services/video-call.service';
import { MyErrorStateMatcher } from '../../register/register.component';

@Component({
  selector: 'app-add-participants',
  templateUrl: './add-participants.component.html',
  styleUrls: ['./add-participants.component.scss']
})


export class AddParticipantsComponent {
   public model: MeetingModel = {
    link: '',
    studentEmail: '',
    mentorEmail: this.cookieService.get('Email'),
   // dialIn: ''
   }

   
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);

  matcher = new MyErrorStateMatcher();
   constructor(
    private router: Router,
    private videocallService: VideoCallService,
    private cookieService: CookieService
  ) { }

 public Send(): void{
  this.videocallService.CreateOrUpdateLink(this.model).subscribe(
    (result) =>
  {
    console.log(result);
  },
  error => {
    console.log(error);
  }
  )
  this.cookieService.set('Student Email', this.model.studentEmail);
  this.cookieService.set('Link', this.model.link.toString());
  //this.cookieService.set('Data creare', this.model.createDate);
 }
}
