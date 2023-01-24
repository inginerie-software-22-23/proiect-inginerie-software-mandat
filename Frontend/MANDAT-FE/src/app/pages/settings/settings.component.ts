import { Component } from '@angular/core';
import { AccountFormDetails, SettingsAccountFormDetails } from 'src/app/constants/account-form-details';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent {
 accountFormDetails : AccountFormDetails = SettingsAccountFormDetails;
}
