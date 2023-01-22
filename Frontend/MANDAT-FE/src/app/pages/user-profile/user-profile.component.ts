import { Component, OnInit } from "@angular/core";

declare var google: any;

@Component({
  selector: "app-user-profile",
  templateUrl: "./user-profile.component.html",
  styleUrls: ["./user-profile.component.scss"],
})
export class UserProfileComponent implements OnInit {
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
