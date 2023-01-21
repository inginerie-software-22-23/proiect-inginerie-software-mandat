import { Component, Input } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MyMentorsModel } from '../interface/my-mentors-model';
import { StudentModel } from '../interface/student-model';
import { DialogAddReviewByStudentComponent } from '../shared/dialog-add-review-by-student/dialog-add-review-by-student.component';
import { DialogViewStudentReviewsComponent } from '../shared/dialog-view-student-reviews/dialog-view-student-reviews.component';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';
import { ReviewService } from 'src/app/services/review.service';

@Component({
  selector: "app-card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.scss"],
})
export class CardComponent {

  public name: string= "Firstname + Lastname";
  public subject: string = "Subject";
  public phoneNumber: string = "Phone number (if case)";
  public address: string = "Address";
  public description: string = "Short description";
  public review: string = "";

  @Input() person!: StudentModel | MyMentorsModel;  
  @Input() canEdit: boolean = true;

  constructor(
    private dialog: MatDialog
  ) { }

  ngOnInit() {
    console.log(this.person);
    this.name = this.person.username;
    this.subject = this.person.subject;
  }

  public addReview(person: any) { //does not work yet
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '550px';
    dialogConfig.height = '770px';
    dialogConfig.data = {data: person}
    const dialog = this.dialog.open(DialogAddReviewByStudentComponent, dialogConfig);
    dialog.afterClosed().subscribe((result) =>{
      if(result){
        window.location.reload();
      }
    });
  }
}
