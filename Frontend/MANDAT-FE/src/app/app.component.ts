import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import {BreakpointObserver} from '@angular/cdk/layout';
import { SocialUser, SocialAuthService } from '@abacritt/angularx-social-login';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'MANDAT-FE';
  loginForm!: FormGroup;
  socialUser!: SocialUser;
  isLoggedin?: boolean;
   constructor(private observer: BreakpointObserver,
    private router: Router,
    private formBuilder: FormBuilder,
    public socialAuthService: SocialAuthService,
    private cookieService: CookieService
  ) {}
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
    this.socialAuthService.authState.subscribe((user) => {
      this.socialUser = user;
      this.isLoggedin = user!= null;
      console.log(this.socialUser);
      this.router.navigate(['/home']);
    });

    var t = this.isLoggedin;
    //var p = this.socialUser.firstName;
    // if (this.isLoggedin === true){
    //   this.cookieService.set('Name', this.socialUser.firstName + ' ' + this.socialUser.lastName)
    // }
  }
   
 
  
   
}
