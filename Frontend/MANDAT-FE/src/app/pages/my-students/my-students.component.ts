import { Component } from '@angular/core';
import { StudentService } from 'src/app/services/student.service';
import { CookieService } from 'ngx-cookie-service';
import { MentorService } from 'src/app/services/mentor.service';

@Component({
  selector: "app-my-students",
  templateUrl: "./my-students.component.html",
  styleUrls: ["./my-students.component.scss"],
})
export class MyStudentsComponent {

  public students: any = [];
  public email: string = "";

  constructor(
    private studentService: StudentService,
    private mentorService: MentorService,
    private cookieService: CookieService,
  ) {}

  ngOnInit(): void {
    this.email = this.cookieService.get('Email');
    console.log(this.email);
    this.mentorService.getMyStudents(this.cookieService.get('Email')).subscribe(
      (response) => {
        console.log(response);
        this.students = response;
      }, 
      (error) => {
        console.error(error);
      }
    );
  }

  
}
