import { Component, EventEmitter, Input, Output } from "@angular/core";
import { FormControl, FormGroupDirective, NgForm, Validators } from "@angular/forms";
import { ErrorStateMatcher } from "@angular/material/core";
import { AccountFormDetails } from "src/app/constants/account-form-details";
import { AccountModel } from "src/app/models/account-model";

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(
    control: FormControl | null,
    form: FormGroupDirective | NgForm | null
  ): boolean {
    const isSubmitted = form && form.submitted;
    return !!(
      control &&
      control.invalid &&
      (control.dirty || control.touched || isSubmitted)
    );
  }
}

@Component({
  selector: "app-account-form",
  templateUrl: "./account-form.component.html",
  styleUrls: ["./account-form.component.scss"],
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
  @Input() accountFormDetails: AccountFormDetails;
  @Output() submitEmitter = new EventEmitter<AccountModel>();

  constructor() {}

  submit(): void {
    this.submitEmitter.emit(this.model);
  }

  isRegisterPage(): boolean {
    return this.accountFormDetails.pageUrl === "/register";
  }

  isSettingsPage(): boolean {
    return this.accountFormDetails.pageUrl == "/settings";
  }
}
