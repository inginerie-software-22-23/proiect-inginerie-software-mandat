import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class MentorRequestsService {
  private url =
    "https://localhost:7278/api/Matching/ViewMentorWaitingRequests/";
  constructor(private http: HttpClient) {}

  public GetUserRequests(email: string): Observable<any> {
    return this.http.get(`${this.url + email}`);
  }
}
