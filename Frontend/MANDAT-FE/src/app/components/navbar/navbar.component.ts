import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import {BreakpointObserver} from '@angular/cdk/layout';
import { SocialUser, SocialAuthService } from '@abacritt/angularx-social-login';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;
  socialUser!: SocialUser;
  isLoggedin?: boolean;
   constructor(private observer: BreakpointObserver,
    private router: Router,
    private formBuilder: FormBuilder,
    public socialAuthService: SocialAuthService
  ) {}
 
  
   logOut():any {
    this.socialAuthService.signOut();
  }
   ngAfterViewInit() {
   
   }
}
