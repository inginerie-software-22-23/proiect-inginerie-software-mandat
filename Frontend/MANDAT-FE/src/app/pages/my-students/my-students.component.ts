import { Component } from '@angular/core';
import { StudentService } from 'src/app/services/student.service';
import { MentorService } from 'src/app/services/mentor.service';
import { StudentModel } from 'src/app/components/interface/student-model';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DialogViewStudentReviewsComponent } from 'src/app/components/shared/dialog-view-student-reviews/dialog-view-student-reviews.component';
import { CookieService } from 'ngx-cookie-service';
import { ReviewService } from 'src/app/services/review.service';

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
  public starsForStudents:Array<[number,string]>=[];// number[]=[];
  public starsForStudentsAux:Array<[number,string]>=[];
  public sortByStarsAsc: boolean = true;
  public sortByNameAsc: boolean = true;
  
  constructor(
    private studentService: StudentService,
    private mentorService: MentorService,
    private reviewService: ReviewService,
    private cookieService: CookieService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.email = this.cookieService.get('Email');
    console.log(this.email);
    this.mentorService.getMyStudents(this.cookieService.get('Email')).subscribe(
      (response) => {
        console.log(response);
        this.students = response;

        setTimeout(()=>{
          for(let student of this.students)
          {
            console.log(student.email);
            this.reviewService.getStudentStars(student.email).subscribe(
              (result:number) => {
                console.log(result);
                this.starsForStudents.push([result,student.email]);
              },
              (error) => {
                console.error(error);
              }
              );
          }
        },600);
      }, 
      (error) => {
        console.error(error);
      }
      
    );

    
    setTimeout(()=>{this.firstSort()},1000);
    setTimeout(()=>{this.sortByNameAsc = true},1100);
    // this.students.push(this.student);
  }

  public firstSort(){
    var rez = this.sortByNameASC();
    this.starsForStudentsAux = [];
        for (let i = 0; i < this.students.length; i++) {//m1 m2 m3
          for (let j = 0; j < this.starsForStudents.length; j++) { //st1,m1 st2,m2 st3,m3
            if (this.starsForStudents[j][1] == this.students[i].email) {
              this.starsForStudentsAux.push([this.starsForStudents[j][0], this.students[i].email])
            }
          }
        }
        console.log(this.starsForStudentsAux);
        this.starsForStudents.length=0;
        this.starsForStudents = [...this.starsForStudentsAux];
    return rez;
}

  public sortByNameASC() {
    this.sortByNameAsc = true;
    console.log("asc");
    console.log(this.sortByNameAsc);
    this.students.sort((a, b) => {
        return a.username.localeCompare(b.username);
    });
  }

  public sortByNameDESC() {
    this.sortByNameAsc = false;
    
    console.log("desc");
    this.students.sort((a, b) => {
        return b.username.localeCompare(a.username);
    });
  }

  public sortedStarsAscending() {
    this.sortByStarsAsc = true;
    this.starsForStudents.sort((a, b) => {
      return a[0] - b[0];
    });

    this.students.sort((a, b) => {
      let aIndex = this.starsForStudents.findIndex(([index, email]) => email === a.email);
      let bIndex = this.starsForStudents.findIndex(([index, email]) => email === b.email);
      return aIndex - bIndex;
    });
  }

  public sortedStarsDescending() {
    this.sortByStarsAsc = false;
    this.starsForStudents.sort((a, b) => {
      return b[0] - a[0];
    });

    this.students.sort((a, b) => {
      let aIndex = this.starsForStudents.findIndex(([index, email]) => email === a.email);
      let bIndex = this.starsForStudents.findIndex(([index, email]) => email === b.email);
      return aIndex - bIndex;
    });
  }

  public getMyReviews() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '1000px';
    dialogConfig.height = '900px';
  
    const dialog = this.dialog.open(DialogViewStudentReviewsComponent,dialogConfig);
    dialog.afterClosed().subscribe((result) =>{
      if(result){
        this.students=result;
      }
    }); 
  }
}
