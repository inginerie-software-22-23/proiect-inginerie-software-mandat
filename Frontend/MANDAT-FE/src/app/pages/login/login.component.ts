import { FacebookLoginProvider, SocialAuthService, SocialUser } from '@abacritt/angularx-social-login';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm!: FormGroup;
  socialUser!: SocialUser;
  isLoggedin?: boolean;
  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    public socialAuthService: SocialAuthService
  ) { }
  
   loginWithFacebook():void {
    console.log(this.socialAuthService.signIn(FacebookLoginProvider.PROVIDER_ID))
    this.socialAuthService.signIn(FacebookLoginProvider.PROVIDER_ID).then((res)=>{
      console.log(res)
      
    })
    
  }
  logOut():any {
    this.socialAuthService.signOut();
  }
}
