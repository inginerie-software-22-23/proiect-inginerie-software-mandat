import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import {MeetingModel} from 'src/app/components/interface/meeting-model';
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
    createDate: Date.now.toString(),
    dialIn: ''
   }
   
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);

  matcher = new MyErrorStateMatcher();
   constructor(
    private router: Router,
    private cookieService: CookieService
  ) { }

 public Send(): void{
  this.cookieService.set('Student Email', this.model.studentEmail);
  this.cookieService.set('Link', this.model.link.toString());
  this.cookieService.set('Data creare', this.model.createDate);
 }
}
