import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountFormDetails } from 'src/app/constants/account-form-details';
import { AccountModel } from 'src/app/models/account-model';
import { MyErrorStateMatcher } from '../material-email/material-email.component';

@Component({
  selector: 'app-account-form',
  templateUrl: './account-form.component.html',
  styleUrls: ['./account-form.component.scss']
})
export class AccountFormComponent {
  public model: AccountModel = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    repeatPassword: "",
    county: "",
    city: "",
    addressInfo: "",
    role: "",
    bio: "",
    phoneNumber: "",
    educationalInstitution: "",
  };

  emailFormControl = new FormControl("", [
    Validators.required,
    Validators.email,
  ]);
  passwordFormControl = new FormControl("", [
    Validators.required,
    Validators.pattern("^(?=.*[A-Z])(?=.*[0-9])(?=.*[a-z]).{8,}$"),
  ]);

  matcher = new MyErrorStateMatcher();
  accountTypes: string[] = ["Student", "Mentor"];
  page: string;
  @Input() accountFormDetails: AccountFormDetails;
  @Output() submitEmitter = new EventEmitter<AccountModel>();

  constructor(
    private router: Router
  )
  {
    this.page = this.router.url;
  }

  submit(): void{
    this.submitEmitter.emit(this.model);
  }

  isRegisterPage(): boolean{
    return this.page === "/register";
  }

  isSettingsPage(): boolean{
    return this.page == "/settings";
  }
}
