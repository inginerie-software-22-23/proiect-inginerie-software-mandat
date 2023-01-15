import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RegisterModel } from '../components/interface/registermodel';

@Injectable({
  providedIn: 'root'
})
export class UserAccountService {
  private url = 'https://localhost:7278/api/Accounts/register';
  private url2 = 'https://localhost:7278/api/Accounts/login';
  private url3 = 'https://localhost:7278/api/Accounts/GetUserInfoByEmail/';
  private url4 = 'https://localhost:7278/api/Accounts/DeleteTokenAsync/';
  constructor(
    private http: HttpClient,

  ) { }
  public Register(user: RegisterModel): Observable<any> {
    const headers = { 'content-type': 'application/json'};
   // const body=JSON.stringify(); 
    return this.http.post(`${this.url}`, user, {'headers':headers});
  }

  public Login(info :any): Observable<any>{
    const headers = { 'content-type': 'application/json'};
    return this.http.post(`${this.url2}`, info, {'headers':headers})
  }

  public GetUserInfo(email :string) : Observable<any>{
    
    return this.http.get(`${this.url3 + email}`);
  }

  public Logout(email: any): Observable<any> {
    const headers = { 'content-type': 'application/json'};
    return this.http.delete(`${this.url4 + email}`);
  }
}
