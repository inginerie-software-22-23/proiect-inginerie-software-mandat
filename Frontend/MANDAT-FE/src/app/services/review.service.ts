import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {
  httpOptions = {
    headers: new HttpHeaders()
    .set('Content-Type','application/json')
    .set('Authorization', 'Bearer ' + this.cookieService.get('Token'))
  };
  public url ='https://localhost:7278/api/Review'

  constructor(
    public http: HttpClient,
    private cookieService: CookieService,
  ) { }

  public createReview(model: any): Observable<any>{
    return this.http.post<any>(`${this.url}`,model);
  }

  public editReview(id: any, message: string): Observable<any>{
    return this.http.patch(`${this.url}/editReview/${id}`,message);
  }
}
