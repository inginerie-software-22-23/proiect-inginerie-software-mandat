import { Component, Input } from '@angular/core';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';
import { MyMentorsModel } from '../interface/my-mentors-model';
import { StudentModel } from '../interface/student-model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  public nume: string= "Firstname + Lastname";
  public subject: string = "Subject";
  public phoneNumber: string = "Phone number (if case)";
  public address: string = "Address";
  public description: string = "Short description";
  public review: string = "";

  @Input() person: StudentModel | MyMentorsModel | undefined;  
  @Input() canEdit: boolean = true;

  constructor(
  ) { }

  ngOnInit() {
    
  }
}
