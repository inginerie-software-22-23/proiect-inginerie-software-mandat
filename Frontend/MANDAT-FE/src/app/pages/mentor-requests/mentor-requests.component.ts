import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { RequestModel } from 'src/app/components/interface/request-model';
import { MentorRequestsService } from 'src/app/services/mentor-requests.service';

@Component({
  selector: 'app-mentor-requests',
  templateUrl: './mentor-requests.component.html',
  styleUrls: ['./mentor-requests.component.scss']
})

export class MentorRequestsComponent {
 
  requests: RequestModel[] = [];
  result = [];
  constructor(
    private router: Router,
    private mentorRequests: MentorRequestsService,
    private cookieService: CookieService
  ) { 

    
  }
   ngOnInit(): void{
    
    var email = this.cookieService.get('Email');
     this.mentorRequests.GetUserRequests(email).forEach(
      (result)=> {
        this.requests = result;        
          });
   
   }
   
   acceptStudent(data: string) : void{
    var email = this.cookieService.get('Email');
    
      this.mentorRequests.ChangeRequestStatus(email, data, true).subscribe(
        (result) => {
           const  div =  document.getElementById(data);
           div!!.remove();
        }
      );

   }

   rejectStudent(data: string) : void{
    var email = this.cookieService.get('Email');
      this.mentorRequests.ChangeRequestStatus(email, data, false).subscribe(
        (result) => {
           const  div =  document.getElementById(data);
           div!!.remove();
        }
      );

   }

}