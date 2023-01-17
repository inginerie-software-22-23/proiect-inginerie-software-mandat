import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';
import { MyMentorsModel } from '../components/interface/my-mentors-model';

@Injectable({
  providedIn: 'root'
})
export class MentorService {
  httpOptions = {
    headers: new HttpHeaders()
    .set('Content-Type','application/json')
    .set('Authorization', 'Bearer ' + this.cookieService.get('Token'))
  };

  public url ='https://localhost:7278/api/Mentor'

  constructor(
    public http: HttpClient,
    private cookieService: CookieService,
  ) { }

  // public getMyMentors(id:any): Observable<MyMentorsModel[]> {
  //   return this.http.get<MyMentorsModel[]>(`${this.url}/studentsByEmailMentor/${id}`,
  //   this.httpOptions);
  // }

  public getAllMentors(): Observable<any>{
    return this.http.get<any>(`${this.url}`);
  }

  public getMentorByEmailMentorAdminView(email: String){
    return this.http.get<any>(`${this.url}/byEmailViewMentAdm/${email}`);
  }

  public getMentorByEmailStudView(email: String){
    return this.http.get<any>(`${this.url}/byEmailViewStud/${email}`);
  }

  public getMentorByHisName(name: String){
    return this.http.get<any>(`${this.url}/byName/${name}`)
  }

  public getMentorsByTheLocation(locationId: any){
    return this.http.get<any>(`${this.url}/byIdLocation/${locationId}`)
  }

  public getMentorsByLocations(): Observable<any>{
    return this.http.get<any>(`${this.url}/mentorsLocations`);
  }

  public getMyStudents(email:String): Observable<any> {
    return this.http.get<any>(`${this.url}/studentsByEmailMentor/${email}`);
  }

  public updateMentor(email: String, model:any): Observable<any>{
    return this.http.put(`${this.url}/mentorUpdate/${email}`,model);
  }

  public updateMentorItems(email: String, model:any): Observable<any>{
    return this.http.put(`${this.url}/mentorItems/${email}`,model);
  }

  public editReview(email: string, isDeleted: boolean): Observable<any>{
    return this.http.patch(`${this.url}/mentorDelete/${email}`,isDeleted);
  }



}
