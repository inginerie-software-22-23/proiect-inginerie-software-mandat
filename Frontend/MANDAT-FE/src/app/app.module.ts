import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { FormInputComponent } from './components/form-input/form-input.component';
import { RegisterComponent } from './pages/register/register.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { CountrySelectorComponent } from './components/country-selector/country-selector.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MaterialInputComponent } from './components/material-input/material-input.component';
import { MaterialEmailComponent } from './components/material-email/material-email.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { HomePageComponent } from './pages/home-page/home-page.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatDividerModule} from '@angular/material/divider';
import { HttpClientModule } from '@angular/common/http';

import {
  SocialLoginModule,
  SocialAuthServiceConfig,
  SocialAuthService
} from '@abacritt/angularx-social-login';
import { FacebookLoginProvider  } from '@abacritt/angularx-social-login';
import { AcceptJSService } from '@openutility/acceptjs-angular-wrapper';


import { MatchingFormComponent } from './pages/matching-form/matching-form.component';
import { MentorRequestsComponent } from './pages/mentor-requests/mentor-requests.component';
import { MyStudentsComponent } from './pages/my-students/my-students.component';
import { CardComponent } from './components/card/card.component';
import { MentorRequestCardComponent } from './components/mentor-request-card/mentor-request-card.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FormInputComponent,
    RegisterComponent,
    NotFoundComponent,
    CountrySelectorComponent,
    MaterialInputComponent,
    MaterialEmailComponent,
    HomePageComponent,
    NavbarComponent,
    MatchingFormComponent,
    MentorRequestsComponent,
    MyStudentsComponent,
    CardComponent,
    MentorRequestCardComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    MatDividerModule,
    MatListModule,
    BrowserAnimationsModule,
    SocialLoginModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [AcceptJSService,SocialAuthService,
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: FacebookLoginProvider.PROVIDER_ID,
            provider: new FacebookLoginProvider('1540989649735951'),
          }
        ],
      } as SocialAuthServiceConfig,
    },],
  bootstrap: [AppComponent],
})
export class AppModule {}
