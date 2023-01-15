import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';
import { MatchingFormModel } from 'src/app/components/interface/matching-form-model';

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

  public model: MatchingFormModel =( 
    {
        county: '',
        subjects: '',
        city: '',
        meetingType: '',
        addressInfo : '',
        stars: 0
        
    });



    public match(): void {
      localStorage.setItem('matchCity',this.model.city);

      localStorage.setItem('matchCounty',this.model.county);

      localStorage.setItem('matchSubject',this.model.subjects);

      localStorage.setItem('matchMeeting',this.model.meetingType);

      localStorage.setItem('matchAddress',this.model.addressInfo);

      // var star = this.rating;

      // console.log(city);

    }

}

