# READ ME DANG IT!

### MANDAT.io

#### Echipa:

1. Dobre Talida
1. Ion Alexandra
1. Kayed Amar
1. Necula Narcis
1. Postolache Miruna
1. Predecscu Denisa

MANDAT.io is an all-in-one mentor-student matchmaking platform.
The mentors(professors)are college students who teach school students.
When a user registers to the platform, they have the option to be either a mentor or a student.
As a student, you have the ability to search for a new mentor based on the following filters:

-   The type of the tutoring session(online or face-to-face)
-   Course subject(maths, physics, etc)
-   Location(only for face-to-face sessions)
-   Rating(of the mentor)

Both the student and the mentors will have their own profiles. The main attributes of a profile is the rating and the description.
The rating will determined based on the history of each individual on this platform.

The student will make a request to be added to the mentor's tutoring list.
The mentor will then have the ability to accept or reject the student.

Once the mentor accepts the student's request, he/she will send his/her schedule to the student. The student will not be allowed to reserve a timeslot for the session with less than two days in advance.

The tutoring sessions can be online or face-to-face.

After both parties have agreed to go further with the process.
Weekly the mentor will update his/her schedule, his/her students will then have the ability to choose a timeslot in which they want to have their tutoring hours.

There will also be the ability to set a recurring timeslot, for the students who want to have the same timeslot weekly.

The platform will allow clients to register both with an in-house login system, or to login via Google or Facebook, if they choose so.

If the tutoring hours will be placed under online meetings, then the mentor will have the option to generate a random Zoom or Google Meet link directly from the platform.

### Tehnologii Folosite

#### Front-End:

1. HTML
2. CSS
3. Bootstrap
4. Typescript
5. Angular

#### Back-End:

1. ASP.NET Core 6 Web API
2. Entity Framework Core
3. JWT Tokens

#### Database:

1. Microsoft SQL Server
2. SQL Server Management Studio
3. Azure Data Studio

#### DevOps:

1. Azure Web Apps
2. Docker

#### External APIs(third parties);

1. Google Login API
2. Facebook Login API
3. Zoom Meeting API
4. Google Meet API

# Git and GitHub Conventions

#### Branch Names:

> type/summary

Branch names should be all lower case and contain only "/" and "-" as a special characters.
Spaces between words should be replaced by the character "-".

##### type:

-   feat
-   fix
-   patch
-   remove

##### summary:

Always must be in present tense.
Describes the changes made.

#### Branch Examples:

> feat/add-dropdown-bullets

> fix/get-account-info-endpoint

> patch/refactor-method-names

> remove/unused-queries

---

#### Commit Names:

> type(project): summary

Commit names should be all lower case and contain only ":", "(", ")" as special characters.

##### type:

-   feat
-   fix
-   patch
-   refactor
-   remove

##### project:

-   fe -> Front-End
-   be -> Back-End
-   db -> Database
-   do -> DevOps

##### summary:

Always must be in present tense.
Describes the changes made.
Each word is separated by a single space character.
After the ":", put a space please. :)

#### Commit Examples:

> feat(fe): add dropdown bullets

> fix(be): get account info endpoint

> patch(be): reduce method queries

> refactor(fe/be): variable names

> remove(db): unused rows

Structura:

-   Titlu
-   Echipa
-   Idee
-   Tehnologii Folosite
-   Conventii GitHub
-   Dropdowns Sprint-uri
