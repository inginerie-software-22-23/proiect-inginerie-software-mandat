import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: "app-card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.scss"],
})
export class CardComponent {


  public canEdit: boolean = true;

  public nume: string= "Firstname + Lastname";
  public subject: string = "Subject";
  public phoneNumber: string = "Phone number (if case)";
  public address: string = "Address";
  public description: string = "Short description";
  public review: string = "";

}
