import { Component, OnInit } from "@angular/core";
import { UserAccountService } from "src/app/services/user-account.service";
import { UserAccountWithAddress } from "src/app/models/user-account-with-address-model";
import { CookieService } from "ngx-cookie-service";
import { ReviewService } from "src/app/services/review.service";
import { MentorRequestsService } from "src/app/services/mentor-requests.service";
import { Roles } from "src/app/constants/roles";

declare var google: any;
const apiKey = "";

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
    subject: [],
    city: "",
    county: "",
    addressInfo: "",
  };

  notifications: number;
  email: string;
  rating: number;
  rol: string;
  roles: Roles = new Roles();

  constructor(
    private userAccountService: UserAccountService,
    private reviewService: ReviewService,
    private mentorRequestService: MentorRequestsService,
    private cookieService: CookieService
  ) {
    this.email = cookieService.get("Email");
    this.rol = cookieService.get("Rol");
    userAccountService
      .GetUserInfoWithAddressByEmail(this.email)
      .subscribe(res => {
        console.log(res);
        this.userAccountWithAddress = res;
      });

    reviewService.getMentorsStars(this.email).subscribe(res => {
      this.rating = res;
    });

    mentorRequestService.GetUserRequests(this.email).subscribe(res => {
      this.notifications = res.length;
    });
  }

  ngOnInit() {
    // const address = "1600 Amphitheatre Parkway, Mountain View, CA";
    // const address = `Strada Izvor 2-4, București`
    const address = `${this.userAccountWithAddress.addressInfo}, ${this.userAccountWithAddress.city}, ${this.userAccountWithAddress.county}`;
    const url = `https://maps.googleapis.com/maps/api/geocode/json?key=${apiKey}&address=${address}`;
    fetch(url)
      .then(resp => resp.json())
      .then(data => {
        const location = data.results[0]?.geometry.location;
        console.log(this.userAccountWithAddress);
        console.log(data);

        let latitude = location !== undefined ? location.lat : -34.397;
        let longitude = location !== undefined ? location.lng : 150.644;

        const map = new google.maps.Map(document.getElementById("map"), {
          // center: { lat: -34.397, lng: 150.644 },
          center: { lat: latitude, lng: longitude },
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
      });
  }
}
