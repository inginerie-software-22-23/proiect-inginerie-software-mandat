import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormControl,
  FormGroupDirective,
  NgForm,
  Validators,
} from "@angular/forms";
import { ErrorStateMatcher } from "@angular/material/core";
import { Router } from "@angular/router";
import { AccountFormDetails, RegisterAccountFormDetails } from "src/app/constants/account-form-details";
import { RegisterModel } from "src/app/models/register-model";
import { UserAccountService } from "src/app/services/user-account.service";
import { Country, Countries } from "src/assets/countries";

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
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"],
})
export class RegisterComponent {
  public model: RegisterModel = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
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
  accountFormDetails: AccountFormDetails = RegisterAccountFormDetails;

  constructor(
    private router: Router,
    private userAccount: UserAccountService
  ) {}

  public register(): void {
    this.userAccount.Register(this.model).subscribe(
      result => {
        console.log(result);
        this.router.navigate(["/login"]);
      },
      error => {
        console.log(error);
      }
    );
    // //console.log(this.model.value.email);
    console.log(this.model);
    //this.router.navigate(['/login'])
  }
}
