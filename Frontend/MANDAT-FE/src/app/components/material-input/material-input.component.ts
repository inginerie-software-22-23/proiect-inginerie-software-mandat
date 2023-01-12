import { Component, Input } from '@angular/core';
import { RegisterModel } from '../interface/registermodel';

@Component({
  selector: 'app-material-input',
  templateUrl: './material-input.component.html',
  styleUrls: ['./material-input.component.scss'],
})
export class MaterialInputComponent {
  @Input() label: string = '';
  @Input() placeholder: string = '';
  @Input() type: string = 'text';
  @Input() model: RegisterModel = {
    firstName: '',
      lastName: '',
      email: '',
      password: '',
      county: '',
      city: '',
      address: '',
      accountType: '',
      bio: '',
      phoneNumber: '',
      educationalInstitution: '',
  };
}
