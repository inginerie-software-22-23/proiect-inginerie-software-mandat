import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserAccountService {
  public url = 'https://localhost:7278/api/Accounts/register';

  constructor(
    public http: HttpClient,

  ) { }
  public Register(user: any): Observable<any> {
    
    return this.http.post(`${this.url}`,user);
  }
}
