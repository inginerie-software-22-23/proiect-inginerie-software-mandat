import { Component } from "@angular/core";
import { Router } from "@angular/router";
import {
  AccountFormDetails,
  RegisterAccountFormDetails,
} from "src/app/constants/account-form-details";
import { UserAccountService } from "src/app/services/user-account.service";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"],
})
export class RegisterComponent {
  accountTypes: string[] = ["Student", "Mentor"];
  accountFormDetails: AccountFormDetails = RegisterAccountFormDetails;

  constructor(
    private router: Router,
    private userAccount: UserAccountService
  ) {}

  public register(model: any): void {
    // alert("Register!")
    console.log(model);
    this.userAccount.Register(model).subscribe(
      result => {
        console.log(result);
        this.router.navigate(["/login"]);
      },
      error => {
        console.log(error);
      }
    );
    // //console.log(this.model.value.email);
    console.log(model);
    //this.router.navigate(['/login'])
  }
}
