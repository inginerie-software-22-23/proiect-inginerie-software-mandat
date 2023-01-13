import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Router } from '@angular/router';
import { RegisterModel } from 'src/app/components/interface/registermodel';
import { UserAccountService } from 'src/app/services/user-account.service';
import { Country, Countries } from 'src/assets/countries';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

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
      addressInfo: '',
      role: '',
      bio: '',
      phoneNumber: '',
      educationalInstitution: '',
  };
  
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);

  matcher = new MyErrorStateMatcher();

  constructor(
      private router: Router,
      private userAccount: UserAccountService,
    ) { }
  countries: Country[] = Countries;
  accountTypes: string[] = ['Student', 'Mentor']

  public register(): void{
    this.userAccount.Register(this.model).subscribe(
      (result) => {
        console.log(result);
        this.router.navigate(['/login'])
      },
      (error) => {
        console.log(error);
      }
     
    );
    // //console.log(this.model.value.email);
    console.log(this.model);
    //this.router.navigate(['/login'])
  }

}