import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CookieService } from 'ngx-cookie-service';
import { MentorModel } from 'src/app/components/interface/mentor-model';
import { StarRatingComponent } from 'src/app/components/star-rating/star-rating.component';
import { MentorRequestsService } from 'src/app/services/mentor-requests.service';
import { MentorService } from 'src/app/services/mentor.service';
import { ReviewService } from 'src/app/services/review.service';

@Component({
  selector: 'app-mentors',
  templateUrl: './mentors.component.html',
  styleUrls: ['./mentors.component.scss']
})
export class MentorsComponent {
  public emailSt?: string;
  public mentors: MentorModel[] = [];
  public filteredList: MentorModel[] = [];
  public starsForMentors:Array<[number,string]> = [];
  public starsForMentorsAux:Array<[number,string]> = [];
  public sortByStarsAsc: boolean = true;
  public sortByNameAsc: boolean = true;

  matchCity: string = ""; 
  matchCounty: string = ""; 
  matchSubject: string = ""; 
  matchMeeting: string = ""; 
  matchAddress: string = ""; 
  matchStars: number = 0; 

  constructor(
    private reviewService: ReviewService,
    private cookie: CookieService,
    private dialog: MatDialog,
    private mentorsService: MentorService,

  ){}

  ngOnInit(): void {
    this.mentorsService.getAllMentors().subscribe(
      (result: MentorModel[]) => {
        this.mentors = result;
       
        for(let mentor of this.mentors) {
 
          this.reviewService.getMentorsStars(mentor.email).subscribe(
            (result:number) => {
              // console.log(result);
              this.starsForMentors.push([result, mentor.email]);
              mentor.numberOfStars = result;
            },
            (error) => {
              console.error(error);
            });
        }

        console.log(this.mentors);
        this.filterMentors();
        this.sortByNameASC();
        this.sortByNameAsc = true;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  
  filterMentors() {
    console.log(this.cookie.check('matchCity'));

    if (this.cookie.check('matchCity'))
      this.matchCity = this.cookie.get('matchCity');
    else
      this.matchCity = "";

    if (this.cookie.check('matchCounty'))
      this.matchCounty = this.cookie.get('matchCounty');
    else
      this.matchCounty = "";
    
    if (this.cookie.check('matchSubject'))
      this.matchSubject = this.cookie.get('matchSubject');
    else
      this.matchSubject = "";

    if (this.cookie.check('matchAddress'))
      this.matchAddress = this.cookie.get('matchAddress');
    else
      this.matchAddress = "";
    
    if (this.cookie.check('matchStars'))
      this.matchStars = parseInt(this.cookie.get('matchStars'));
    else
      this.matchStars = 0;
    
    this.filteredList = this.mentors.filter((mentor) => {
      if (this.matchCity  === "")
        return mentor;
      else
        return mentor.city == this.matchCity;  
    });
    
    this.filteredList = this.filteredList.filter((mentor) => {
      if (this.matchCounty  === "")
        return mentor;
      else
        return mentor.county == this.matchCounty;  
    });
    
    this.filteredList = this.filteredList.filter((mentor) => {
      if (this.matchSubject  === "")
        return mentor;
      else
        return mentor.subject == this.matchSubject;  
    });
    
    this.filteredList = this.filteredList.filter((mentor) => {
      if (this.matchAddress  === "")
        return mentor;
      else
        return mentor.addressInfo == this.matchAddress;  
    });
    
    this.filteredList = this.filteredList.filter((mentor) => {
      if (this.matchStars === 0)
        return mentor;
      else
        return mentor.numberOfStars == this.matchStars;  
    });
    
    this.mentors = this.filteredList;
    
    console.log(this.mentors);
  }

  public sortByNameASC() {
    this.sortByNameAsc = true;
    this.mentors.sort((a, b) => {
      return a.username.localeCompare(b.username);
    });
  }

  public sortByNameDESC() {
    this.sortByNameAsc = false;
    this.mentors.sort((a, b) => {
        return b.username.localeCompare(a.username);
    });
  }

  public sortedStarsAscending(){
    this.sortByStarsAsc = true;
    this.starsForMentors.sort((a, b) => {
      return a[0] - b[0];
    });

    this.mentors.sort((a, b) => {
      let aIndex = this.starsForMentors.findIndex(([index, email]) => email === a.email);
      let bIndex = this.starsForMentors.findIndex(([index, email]) => email === b.email);
      return aIndex - bIndex;
    });
  }

  public sortedStarsDescending(){
    this.sortByStarsAsc = false;
    this.starsForMentors.sort((a, b) => {
      return b[0] - a[0];
    });

    this.mentors.sort((a, b) => {
      let aIndex = this.starsForMentors.findIndex(([index, email]) => email === a.email);
      let bIndex = this.starsForMentors.findIndex(([index, email]) => email === b.email);
      return aIndex - bIndex;
    });
  }

}