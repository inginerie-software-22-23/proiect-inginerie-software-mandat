import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MeetingModel } from '../components/interface/meeting-model';

@Injectable({
  providedIn: 'root'
})
export class VideoCallService {

 private url =  "https://localhost:7278/api/VideoCall";
  constructor( public http: HttpClient,
    ) { }

    public CreateOrUpdateLink(model: MeetingModel): Observable<any>{
      //const headers = { 'content-type': 'application/json'};
      return this.http.post(`${this.url}`, model); //{'headers':headers});
    }
}
