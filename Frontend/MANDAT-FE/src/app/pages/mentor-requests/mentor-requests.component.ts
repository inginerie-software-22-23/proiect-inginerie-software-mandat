import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { MentorRequestsService } from 'src/app/services/mentor-requests.service';

@Component({
  selector: 'app-mentor-requests',
  templateUrl: './mentor-requests.component.html',
  styleUrls: ['./mentor-requests.component.scss']
})

export class MentorRequestsComponent {

  constructor(
    private router: Router,
    private mentorRequests: MentorRequestsService,
    private cookieService: CookieService
  ) {}
  
  makeHTMLElement(tag: any, classes: any, text: any, attributes: any) {	
    var d = document.createElement(tag);
    d.addClass(classes);
    d.append(text);
    for(var prop in attributes) {
      d.attr(prop, attributes[prop]);
    }
    return d;
  }  
  ngOnInit(): void {
   
    var email = this.cookieService.get('Email');
  
    this.mentorRequests.GetUserRequests(email).forEach(
      (result)=> {
      var requestBox = this.makeHTMLElement('div', 'request-box', '', '');
      var img = this.makeHTMLElement('div', 'request-profile', '', '');
      (img).css('background-image', `url(../../../assets/images/profile.jpg")`);
      
      
      var name = result.fullName;
      var nameBox = this.makeHTMLElement("div", 'name-box', name, '');
      var email = result.email;
      var unBox = this.makeHTMLElement('div', 'user-name-box', email, '');
      
      var level = Math.floor(Math.random()*100)
      var levelBox = this.makeHTMLElement('div', 'level-indicator', '',`Level ${level}`);
      
      (requestBox).append(img, nameBox, unBox, levelBox)
      ('.request-list').append(requestBox)
   
    
  }
    )
  }
  
  
  
  /*
  request Request
  */
}