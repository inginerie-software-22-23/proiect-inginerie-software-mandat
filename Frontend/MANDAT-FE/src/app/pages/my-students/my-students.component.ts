import { Component } from '@angular/core';
import { StudentService } from 'src/app/services/student.service';
import { MentorService } from 'src/app/services/mentor.service';
import { StudentModel } from 'src/app/components/interface/student-model';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DialogViewStudentReviewsComponent } from 'src/app/components/shared/dialog-view-student-reviews/dialog-view-student-reviews.component';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: "app-my-students",
  templateUrl: "./my-students.component.html",
  styleUrls: ["./my-students.component.scss"],
})
export class MyStudentsComponent {

  public students: StudentModel[] = [];
  public email: string = "";

  public student: StudentModel = {
    username: "string",
    email: "string",
    phoneNumber: "string",
    passwordHash: "string",
    createdAt: new Date(),
    isActive: true,
    isDeleted: false,
    bio: "string",
    educationalInstitution: "string",
    studentGrade: 7,
    studentSchoolQualification: "string",
    subject: "string",
    message: "string",
    starsNumber: 2,
    reviewStatus: "student",
    city: "string",
    county: "string",
    addressInfo: "string"
  };
  
  constructor(
    private studentService: StudentService,
    private mentorService: MentorService,
    private cookieService: CookieService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.email = this.cookieService.get('Email');
    console.log(this.email);
    // this.mentorService.getMyStudents(this.cookieService.get('Email')).subscribe(
    //   (response) => {
    //     console.log(response);
    //     this.students = response;
    //   }, 
    //   (error) => {
    //     console.error(error);
    //   }
    // );

    this.students.push(this.student);
  }

  public sortByNameASC() {
    this.students.sort((a, b) => {
        return a.username.localeCompare(b.username);
    });
  }

  public sortByNameDESC() {
    this.students.sort((a, b) => {
        return b.username.localeCompare(a.username);
    });
  }

  public getMyReviews() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '1000px';
    dialogConfig.height = '1000px';
  
    const dialog = this.dialog.open(DialogViewStudentReviewsComponent,dialogConfig);
    dialog.afterClosed().subscribe((result) =>{
      if(result){
        this.students=result;
      }
    }); 
  }
}
