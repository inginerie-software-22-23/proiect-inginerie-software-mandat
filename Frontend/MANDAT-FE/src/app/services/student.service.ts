import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  token = this.cookieService.get("Token");
  url = "https://localhost:7278/api/Student";

  private getHttpOptions(body: any) {
    return {
      headers: new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Authorization', 'Bearer ' + this.token),
      body: body
    }
  }

  constructor(
    public http: HttpClient,
    private cookieService: CookieService
  ) { }

  public getAllStudents(): Observable<any> {
    return this.http.get<any>(`${this.url}/GetAllStudents`);
  }

  public getStudentById(id: any): Observable<any> {
    return this.http.get<any>(`${this.url}/GetStudentById`, id);
  }

  public getStudentByName(username: any): Observable<any> {
    return this.http.get<any>(`${this.url}/GetStudentByName/${username}`);
  }

  public getStudentByLocation(locationId: any): Observable<any> {
    return this.http.get<any>(`${this.url}/GetStudentsByLocation/${locationId}`);
  }

  public getMentorsForStudent(id: any): Observable<any> {
    return this.http.get<any>(`${this.url}/GetMentorsForStudent`, id);
  }

  // public getMentorPhoneNumber(studentId: any, mentorId: any): Observable<any> {
  //   return this.http.get<any>(`${this.url}/GetMentorPhoneNumber/${studentId}/${mentorId}`);
  // }
}
