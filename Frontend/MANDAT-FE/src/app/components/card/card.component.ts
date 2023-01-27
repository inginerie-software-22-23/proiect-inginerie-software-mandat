import { Component, Input } from "@angular/core";
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";
import { DialogAddReviewByStudentComponent } from "../shared/dialog-add-review-by-student/dialog-add-review-by-student.component";
import { CookieService } from "ngx-cookie-service";
import { Router } from "@angular/router";
import { MentorService } from "src/app/services/mentor.service";
import { StudentModel } from "../../models/student-model";
import { MentorModel } from "src/app/models/mentor-model";

@Component({
  selector: "app-card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.scss"],
})
export class CardComponent {
  @Input() person: StudentModel | MentorModel;
  @Input() pageToShowOn: string = "";

  constructor(
    private dialog: MatDialog,
    private cookie: CookieService,
    private router: Router,
    private mentorService: MentorService
  ) {}
  isArray(subject: any): boolean {
    return Array.isArray(subject);
}
  ngOnInit() {
    console.log(this.person);
  }

  public addReview(person: any) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = "550px";
    dialogConfig.height = "770px";
    dialogConfig.data = { data: person };
    const dialog = this.dialog.open(
      DialogAddReviewByStudentComponent,
      dialogConfig
    );
    dialog.afterClosed().subscribe(result => {
      if (result) {
        window.location.reload();
      }
    });
  }

  public chooseMentor(person: any) {
    let email = this.cookie.get("Email");

    if (email === "") {
      this.router.navigate(["/login"]);
    } else {
      this.mentorService
        .createNewMatch(person.email, email, person.subject)
        .subscribe(result => {
          if (result) {
            alert("The matching request was send!!");
            console.log(result);
          }
        });
    }
  }

  public redirectToProfile() {
    this.router.navigate([`/user-profile/${this.person.email}`]);
  }
}
