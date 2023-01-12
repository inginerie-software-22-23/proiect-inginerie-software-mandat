import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-matching-form',
  templateUrl: './matching-form.component.html',
  styleUrls: ['./matching-form.component.scss']
})
export class MatchingFormComponent implements OnInit {
  ngOnInit(): void {
    
  }

  subjects: string[] = ['Informatics', 'English', "Mathematics","History","Biology","Geography","Romanian","French","Chemistry","Physics"];
  meetingTypes: string[] = ['Online', 'Face-To-Face'];
  stars: number[] = [1,2,3,4,5];

  public matchForm: FormGroup = new FormGroup( 
    {
        county: new FormControl(''),
        subject: new  FormControl(''),
        city: new  FormControl(''),
        meeting: new  FormControl(''),
        address: new  FormControl(''),
        rating: new  FormControl('')
        
    });

    get county(): FormGroup{
      return this.matchForm.get('county') as FormGroup;
    }
    get subject(): AbstractControl{
      return this.matchForm;
    }
    get city(): AbstractControl{
      return this.matchForm;
    }
    get meeting(): AbstractControl{
      return this.matchForm;
    }
    get address(): AbstractControl{
      return this.matchForm;
    }
    get rating(): AbstractControl{
      return this.matchForm;
    }

    public match(): void {
      var city = this.city.value["city"];
      localStorage.setItem('matchCity',city);

      var county = this.matchForm.controls["county"].value;
      localStorage.setItem('matchCounty',county);

      var subject = this.matchForm.controls["subject"].value;
      localStorage.setItem('matchSubject',subject);

      var meeting = this.matchForm.controls["meeting"].value;
      localStorage.setItem('matchMeeting',meeting);

      var address = this.matchForm.controls["address"].value;
      localStorage.setItem('matchAddress',address);

      var star = this.rating;

      console.log(city);

    }

}

