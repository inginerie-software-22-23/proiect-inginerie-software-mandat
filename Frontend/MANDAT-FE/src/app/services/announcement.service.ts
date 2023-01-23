import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AnnouncementModel } from '../models/announcement-model';

@Injectable({
  providedIn: 'root'
})
export class AnnouncementService {

  url: string ='https://localhost:7278/api/Announcement'

  constructor(private http: HttpClient) { }

  public CreateAnnouncementWithEmail(model: AnnouncementModel): Observable<any> {
    return this.http.post<AnnouncementModel>(`${this.url}/create-with-email`, model);
  }
}
