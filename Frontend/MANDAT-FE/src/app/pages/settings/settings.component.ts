import { Component } from "@angular/core";
import { CookieService } from "ngx-cookie-service";
import {
  AccountFormDetails,
  SettingsAccountFormDetails,
} from "src/app/constants/account-form-details";
import { Roles } from "src/app/constants/roles";
import { AccountFormModel, AccountModel } from "src/app/models/account-model";
import { UserAccountService } from "src/app/services/user-account.service";

@Component({
  selector: "app-settings",
  templateUrl: "./settings.component.html",
  styleUrls: ["./settings.component.scss"],
})
export class SettingsComponent {
  accountFormDetails: AccountFormDetails = SettingsAccountFormDetails;
  roles: Roles = new Roles();

  constructor(
    private userAccountService: UserAccountService,
    private cookieService: CookieService
  ) {}

  updateAccountDetails(accountFormModel: AccountFormModel): void {
    const email = accountFormModel.userEmail;
    const model = accountFormModel.model;
    model.userName = `${model.firstName} ${model.lastName}`;
    this.userAccountService
      .UpdateUserInfoWithAddressByEmail(email, model)
      .subscribe(
        result => {
          if (!this.roles.isAdmin(this.cookieService.get("Rol"))) {
            this.cookieService.set("Email", model.email);
            this.cookieService.set("Nume", model.userName);
          }
        },
        error => {
          console.log(error);
        }
      );
  }
}
