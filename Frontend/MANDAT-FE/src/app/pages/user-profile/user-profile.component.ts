import { Component, OnInit } from "@angular/core";
import { UserAccountService } from "src/app/services/user-account.service";
import { MentorService } from "src/app/services/mentor.service";
import { UserAccountWithAddress } from "src/app/models/user-account-with-address-model";

declare var google: any;

@Component({
  selector: "app-user-profile",
  templateUrl: "./user-profile.component.html",
  styleUrls: ["./user-profile.component.scss"],
})
export class UserProfileComponent implements OnInit {
  public userAccountWithAddress: UserAccountWithAddress = {
    username: "",
    email: "",
    phoneNumber: "",
    bio: "",
    educationalInstitution: "",
    subject: "",
    city: "",
    county: "",
    addressInfo: "",
  };

  constructor(
    private userAccountService: UserAccountService,
    private mentorService: MentorService) {
    // userAccountService.GetUserInfo("ianis@yahoo.com").subscribe(res => {
    //   console.log(res);
    // });

    // userAccountService.GetUserInfoWithAddressByEmail("ianis@yahoo.com").subscribe(res => {
    //   console.log(res);
    // })

    userAccountService.GetUserInfoWithAddressByEmail("pat@example1.com").subscribe(res => {
      console.log(res);
      this.userAccountWithAddress = res;
      this.userAccountWithAddress.subject = "muschii mei"
    })

    // mentorService
    //   .getMentorByEmailStudView("pat@example1.com")
    //   .subscribe(res => {
    //     console.log(res);
    //   });
  }

  ngOnInit() {
    const address = "1600 Amphitheatre Parkway, Mountain View, CA";
    const map = new google.maps.Map(document.getElementById("map"), {
      center: { lat: -34.397, lng: 150.644 },
      zoom: 8,
    });

    const geocoder = new google.maps.Geocoder();
    geocoder.geocode(
      { address: address },
      (results: { geometry: { location: any } }[], status: string) => {
        if (status === "OK") {
          map.setCenter(results[0].geometry.location);
          const marker = new google.maps.Marker({
            map: map,
            position: results[0].geometry.location,
          });
        } else {
          console.log(
            `Geocode was not successful for the following reason: ${status}`
          );
        }
      }
    );
  }
}
