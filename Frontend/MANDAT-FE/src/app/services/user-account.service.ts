import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RegisterModel } from '../components/interface/registermodel';

@Injectable({
  providedIn: 'root'
})
export class UserAccountService {
  public url = 'https://localhost:7278/api/Accounts/register';

  constructor(
    private http: HttpClient,

  ) { }
  public Register(user: RegisterModel): Observable<any> {
    const headers = { 'content-type': 'application/json'};
   // const body=JSON.stringify(); 
    return this.http.post(`${this.url}`, user, {'headers':headers});
  }
}
