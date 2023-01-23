import { Component } from "@angular/core";
import { FormControl, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { CookieService } from "ngx-cookie-service";
import { AnnouncementModel } from "src/app/models/announcement-model";
import { AnnouncementService } from "src/app/services/announcement.service";
import { Country, Countries } from "src/assets/countries";

@Component({
  selector: "app-create-announcement",
  templateUrl: "./create-announcement.component.html",
  styleUrls: ["./create-announcement.component.scss"],
})
export class CreateAnnouncementComponent {
  public model: AnnouncementModel = {
    email: "",
    subject: "",
    description: "",
    price: 0,
    meetingType: true,
  };

  constructor(
    private router: Router,
    private announcementService: AnnouncementService,
    private cookieService: CookieService
  ) {
    this.model.email = cookieService.get('Email');
  }
  countries: Country[] = Countries;
  meetingTypes: string[] = ["Online", "Face-to-Face"];

  public post(): void {
    this.announcementService.CreateAnnouncementWithEmail(this.model).subscribe(
      result => {
        console.log(result);
        this.router.navigate(["/home"]);
      },
      error => {
        console.log(error);
      }
    );
    console.log(this.model);

    // this.userAccount.Register(this.model).subscribe(
    //   result => {
    //     console.log(result);
    //     this.router.navigate(["/login"]);
    //   },
    //   error => {
    //     console.log(error);
    //   }
    // );
    // // //console.log(this.model.value.email);
    // console.log(this.model);
    // //this.router.navigate(['/login'])
  }
}
