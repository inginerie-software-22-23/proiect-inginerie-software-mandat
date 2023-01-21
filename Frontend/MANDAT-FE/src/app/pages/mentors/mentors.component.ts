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

  // hardcoded seed
  // mentors: MentorModel[] = [
  //   {
  //     username: 'nr1',
  //     email: 'nr1',
  //     phoneNumber: 'nr1',
  //     passwordHash: 'nr1',
  //     createdAt: new Date(),
  //     isActive: true,
  //     isDeleted: false,
  //     bio: 'nr1',
  //     educationalInstitution: 'nr1',
  //     subject: 'nr1',
  //     reviewStatus: 'nr1',
  //     city: 'nr1',
  //     county: 'nr1',
  //     addressInfo: 'nr1',
  //     numberOfStars: 5
  //   },
  //   {
  //     username: 'nr2',
  //     email: 'nr2',
  //     phoneNumber: 'nr2',
  //     passwordHash: 'nr2',
  //     createdAt: new Date(),
  //     isActive: true,
  //     isDeleted: false,
  //     bio: 'nr2',
  //     educationalInstitution: 'nr2',
  //     subject: 'nr2',
  //     reviewStatus: 'nr2',
  //     city: 'nr2',
  //     county: 'nr2',
  //     addressInfo: 'nr2',
  //     numberOfStars: 5
  //   },
  //   {
  //     username: 'nr3',
  //     email: 'nr3',
  //     phoneNumber: 'nr3',
  //     passwordHash: 'nr3',
  //     createdAt: new Date(),
  //     isActive: true,
  //     isDeleted: false,
  //     bio: 'nr3',
  //     educationalInstitution: 'nr3',
  //     subject: 'nr3',
  //     reviewStatus: 'nr3',
  //     city: 'nr3',
  //     county: 'nr3',
  //     addressInfo: 'nr3',
  //     numberOfStars: 5
  //   },
  //   {
  //     username: 'nr31',
  //     email: 'nr3',
  //     phoneNumber: 'nr3',
  //     passwordHash: 'nr3',
  //     createdAt: new Date(),
  //     isActive: true,
  //     isDeleted: false,
  //     bio: 'nr3',
  //     educationalInstitution: 'nr3',
  //     subject: 'nr3',
  //     reviewStatus: 'nr3',
  //     city: 'nr3',
  //     county: 'nr3',
  //     addressInfo: 'nr3',
  //     numberOfStars: 5
  //   },
  //   {
  //     username: 'nr32',
  //     email: 'nr3',
  //     phoneNumber: 'nr3',
  //     passwordHash: 'nr3',
  //     createdAt: new Date(),
  //     isActive: true,
  //     isDeleted: false,
  //     bio: 'nr3',
  //     educationalInstitution: 'nr3',
  //     subject: 'nr3',
  //     reviewStatus: 'nr3',
  //     city: 'nr3',
  //     county: 'nr3',
  //     addressInfo: 'nr3',
  //     numberOfStars: 5
  //   },
  //   {
  //     username: 'nr33',
  //     email: 'nr3',
  //     phoneNumber: 'nr3',
  //     passwordHash: 'nr3',
  //     createdAt: new Date(),
  //     isActive: true,
  //     isDeleted: false,
  //     bio: 'nr3',
  //     educationalInstitution: 'nr3',
  //     subject: 'nr3',
  //     reviewStatus: 'nr3',
  //     city: 'nr3',
  //     county: 'nr3',
  //     addressInfo: 'nr3',
  //     numberOfStars: 5
  //   }];

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
          console.log(mentor.email);
          this.reviewService.getMentorsStars(mentor.email).subscribe(
            (result:number) => {
              console.log(result);
              this.starsForMentors.push([result, mentor.email]);
              mentor.numberOfStars = result;
            },
            (error) => {
              console.error(error);
            });
        }

        this.sortByNameASC();
        this.sortByNameAsc = true;
      },
      (error) => {
        console.error(error);
      }
    );

    this.filterMentors();
  }

  
  filterMentors() {
    this.matchCity = this.cookie.get('matchCity');
    this.matchCounty = this.cookie.get('matchCounty');
    this.matchSubject = this.cookie.get('matchSubject');
    this.matchAddress = this.cookie.get('matchAddress');
    this.matchStars = parseInt(this.cookie.get('matchStars'));
    
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