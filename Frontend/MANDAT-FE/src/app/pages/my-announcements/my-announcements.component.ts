import { Component } from '@angular/core';
import { CookieService } from "ngx-cookie-service";
import { MeetingTypes } from 'src/app/constants/meeting-types';
import { AnnouncementModel } from 'src/app/models/announcement-model';
import { AnnouncementService } from 'src/app/services/announcement.service';

@Component({
  selector: 'app-my-announcements',
  templateUrl: './my-announcements.component.html',
  styleUrls: ['./my-announcements.component.scss']
})
export class MyAnnouncementsComponent {
  private url: string = "https://localhost:7278/api/Announcement/getAllAnnouncementByEmail/pat@example1.com"
  private email: string;
  meetingTypes: Map<boolean, string> = MeetingTypes;
  announcements: AnnouncementModel[];

  constructor(
    private announcementService: AnnouncementService,
    private cookieService: CookieService
  ) {
    this.email = cookieService.get('Email');
    this.announcementService.GetAllAnnouncmentWithEmail(this.email).subscribe(result => {
      this.announcements = result;
      console.log(this.announcements)

    });
  }
}
