import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';
import { MatchingFormModel } from 'src/app/interfaces/matching-form-model';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/components/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';



@Component({
  selector: "app-matching-form",
  templateUrl: "./matching-form.component.html",
  styleUrls: ["./matching-form.component.scss"],
  
})
export class MatchingFormComponent implements OnInit {
  ngOnInit(): void {}

  constructor(
    public cookieService: CookieService,
    public router: Router
  ){}

  subjects: string[] = [
    "Informatics",
    "English",
    "Mathematics",
    "History",
    "Biology",
    "Geography",
    "Romanian",
    "French",
    "Chemistry",
    "Physics",
  ];
  meetingTypes: string[] = ["Online", "Face-To-Face"];
  stars: number[] = [1, 2, 3, 4, 5];

  public model: MatchingFormModel = {
    county: "",
    subjects: "",
    city: "",
    meetingType: "",
    stars: 0,
  };


  onChange(event: Event) {
    const target = event.target as HTMLInputElement;
    if (target.checked) {
      this.model.stars = parseInt(target.value);
    }
  }
  
  public match(): void {

    this.cookieService.set('matchCity', this.model.city);
    this.cookieService.set('matchCounty', this.model.county);
    this.cookieService.set('matchSubject', this.model.subjects);
    this.cookieService.set('matchMeeting', this.model.meetingType);
    this.cookieService.set('matchStars', this.model.stars.toString());

    this.router.navigate(["/mentors"]);
  }

}