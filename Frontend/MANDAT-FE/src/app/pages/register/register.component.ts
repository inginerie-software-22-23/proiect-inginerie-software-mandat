import { Component } from '@angular/core';
import { Country, Countries } from 'src/assets/countries';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  countries: Country[] = Countries;
  accountTypes: string[] = ['Student', 'Mentor']
}
