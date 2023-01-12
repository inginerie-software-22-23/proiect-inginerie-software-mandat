import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterModel } from 'src/app/components/interface/registermodel';
import { UserAccountService } from 'src/app/services/user-account.service';
import { Country, Countries } from 'src/assets/countries';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  public model: RegisterModel = {
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
    constructor(
      private router: Router,
      private userAccount: UserAccountService,
    ) { }
  countries: Country[] = Countries;
  accountTypes: string[] = ['Student', 'Mentor']

  public register(): void{
    // this.userAccount.Register(this.registerForm.value).subscribe(
    //   (result) => {
    //     console.log(result);
    //   },
    //   (error) => {
    //     console.log(error);
    //   }
     
    // );
    //console.log(this.model.value.email);
    console.log(this.model.firstName);
    //this.router.navigate(['/login'])
  }

}