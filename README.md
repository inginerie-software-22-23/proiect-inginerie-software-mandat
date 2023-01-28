### MANDAT.io 🚀

#### 🏢 Team:

1️⃣ Dobre Talida

2️⃣ Ion Alexandra

3️⃣ Kayed Amar

4️⃣ Necula Narcis

5️⃣ Postolache Miruna

6️⃣ Predescu Denisa

👨‍💻 **MANDAT.io** is an all-in-one mentor-student matchmaking platform.
The mentors (professors) are college students who teach school students.
When a user registers to the platform, they have the option to be either a mentor or a student.
As a student, you have the ability to search for a new mentor based on the following filters:

-   The type of the tutoring session(online or face-to-face)
-   Course subject(maths, physics, etc)
-   Location(only for face-to-face sessions)
-   Rating(of the mentor)

🗺️ Along with the search filters, the student will have their very own integrated map to visually check the location of their soon-to-be mentor.

📷 Both the student and the mentors will have their own profiles. The main attributes of a profile is the rating and the description.
📊 The rating will determined based on the history of each individual on this platform.
Students will give a rating to their mentors and each mentor will have the ability to assign a rating to their students, so please behave yourselves! 🚨

The student will make a request to be added to the mentor's tutoring list.
The mentor will then have the ability to accept or reject the student.

📅 Once the mentor accepts the student's request, he/she will send his/her schedule to the student.
🚫 The student will not be allowed to reserve a timeslot for the session with less than two days in advance.

The tutoring sessions can be _online_ 📺 or _face-to-face_ 👬.

After both parties have agreed to go further with the process.👍
Weekly the mentor will update his/her schedule, his/her students will then have the ability to choose a timeslot in which they want to have their tutoring hours.

🔁 There will also be the ability to set a recurring timeslot, for the students who want to have the same timeslot weekly.

✅ The platform will allow clients to register both with an in-house login system, or to login via Google or Facebook, if they choose so.

📶 If the tutoring hours will be placed under online meetings, then the mentor will have the option to generate a random Zoom or Google Meet link directly from the platform.

<details>
<summary><i><b>UML Diagram</b></i></summary>

![UML diagram](https://user-images.githubusercontent.com/86727047/208981747-4afcb39f-f5fc-40f3-ad80-941d4e5f8c06.png)

</details>

<details>
<summary><i><b>Activity Diagram</b></i></summary>

![activity diagram](https://user-images.githubusercontent.com/86727047/208981859-112e3dec-8bd7-47df-8590-a0e24d88a7c0.png)

</details>

### 🔜 Additional Features

-   In-house Chatting System
-   Built-in Assignments Page
-   Files Upload/Download

### 💻 Technologies

##### _Front-End:_

![HTML5](https://skillicons.dev/icons?i=html,css,bootstrap,typescript,angular,figma)

##### _Back-End:_

![HTML5](https://skillicons.dev/icons?i=net,cs,bash)

-   JWT Tokens

##### _Database:_

-   Microsoft SQL Server
-   SQL Server Management Studio
-   Azure Data Studio

##### _DevOps:_

![HTML5](https://skillicons.dev/icons?i=azure,docker,kubernetes)

#### External APIs(third parties);

1. Google Login API
2. Facebook Login API
3. Zoom Meeting API
4. Google Meet API

#### Extra Tools

![HTML5](https://skillicons.dev/icons?i=git,github,discord,md,nodejs,stackoverflow,vscode)



# Platform logic :bulb:

<details>
<summary><b> 🎬 User Stories 📰 </b></summary>

***Discussed in Weekly Meeting on 11.09.2022 08:45PM***

**As Admin:**
- I can manage/delete any account so that I can enforce appropriate measures if needed

**As a unregistered user/someone without an account:**
- I want to search the website/endpoints that are public/don't have authorization so that I can check out the website without having to register
- I want to be able to register so that I can have my own personal account

**As a registered user(mentor or student):**
- I want to be able to login so that I can navigate on my own personal account
- I want to to have the ability to check the details of my profile so that I can view my personal info
- I want to manage my account(update details/delete account) so that I can leave my details up-to-date
- I can leave a review/rating score on the person I worked with(mentor for student/student for mentor) so that I can acknowledge my experience with them/help others get some feedback on that person

**As a student:**
- I want to search for mentors both for online sessions and physical session so that I can find a mentor
- I want to see every mentor's location on the map(in case of physical sessions) so that I can better estimate my route
- I want to sort mentors based on filters such as location/distance, rating, subject, price so that I can make a better decision on which mentor to pick
- I want to see a mentor's phone number so that I can call him/her and schedule a timeslot for the future sessions

**As a mentor:**
- I want to be able to accept/reject student requests so that I can be more selective with the students I work with
- I can view all my accepted students/the students I tutor so that I can have an overview on them
- I can post announcements with subjects I can teach so that I attract more students 
- I can generate a Google Meet/Zoom link so that it would be easier to have online tutoring sessions
  
  
![user stories](https://user-images.githubusercontent.com/86727047/214879057-f6dd7185-29c3-408c-bc86-a2cf45253319.png)

---
</details>

<details>
 <summary><b>Prioritized Product Backlog</b> :page_with_curl: :judge:</summary>

![BacklogImage](/readme-images/backlog.png)
</details>

<details>
 <summary><b>Prioritized Product Backlog Review</b> :judge: :thinking:</summary>

![backlog](https://user-images.githubusercontent.com/86727047/214884411-962135f6-e9ee-4e6f-936e-54c69ccb4ee7.png)

> On the picture above: 
>
> :white_circle: means the task was completed successfully
>
> :yellow_circle: means the task was started but not completed successfully
>
> :red_circle: means the task was not started

:white_circle: The main task was to complete high priority (aka *MUST*) tasks.
These are essential to have a functional application, easy to navigate inside it and with logical requirements.

:white_circle: Medium priority (aka *SHOULD*) tasks have also been done. Now the user can experience some
benefits that are nice to have but not essential to the site: login page has validation field, a mentor can create a video meeting link and a mentor/student can review and rate their students/mentors.
</br>
</br>
The *COULD* priority tasks were the most difficult (both tasks are not done):

:yellow_circle: <i>`Login using Facebook`</i> the task was started, but a problem was encountered. The application created is not active, so login with facebook is not possible at the moment.

![login with facebook](https://user-images.githubusercontent.com/86727047/214895913-55910d0a-c142-4881-9014-d9aca0164e70.png)

:red_circle: <i>`Remember me checkbox`</i> this task was not started due to lack of time.

In the frontend (in the login page) both the possibility to <i>login with Facebook</i> and the option <i>remember me</i> are displayed, because they represent features worth adding in the future.

![login  page](https://user-images.githubusercontent.com/86727047/214895869-27121c1d-2f52-4336-b0c2-02dfcb42c2f5.png)

</details>

# 📚 Sprints 📚

<details>
<summary><b> Delivrables per 3 sprints </b></summary>

[DelivrableSprint4](/readme-images/delivrablesprint4.doc)

[DelivrableSprint5](/readme-images/delivrablesprint5.doc)

[DelivrableSprint6](/readme-images/delivrablesprint6.doc)
</details>

<details>

<summary><b> 📗 Sprint 1️⃣✔️ </b></summary>

![Backlog1](/readme-images/sprint_1.PNG)

 > Login & Register
 
  * <i><b>Login</b></i> : Should be composed of two fields (email and password) and Login button acompanied by "Login with Facebook" and/or "Login with Google" button fir different login options.
  * <i><b>Register</b></i> : Will be a page to start your account and begin adding information to help our algorithm find the best match for you to learn and better yourself. Here you'll have to input relevant information like: name, address (for convenient pairing with a mentor or students), and an email wich will require a new password to secure your account. You will also choose if you want to register as a mentor or as a student.
  
  Information about courses and what subjects are you interested in teaching/learning will be at a later step, when completing the profile.

 > Integrated services
 
  * <i><b>Login with Facebook</b></i> : Facebook Login allows visitors to use their Facebook profile to log into your website instead of creating a unique sign-in. Then, when a visitor uses Facebook to log in, they also grant you access to specific pieces of information. 
 
     That information may include their:

      *  Email
      *  Public profile
      *  Likes and interests
      *  Friends

    This information can be usefull to see what your fielnds are studying and can help you get toghether and combine classes and help each other with homework.
 
 * <i><b>Login with Google</b></i> : For a simplified and secure way to connect to yourt account and transfer the required data with speed and ease.
 
 * <i><b>Maps from Google</b></i> : Integration of Google Maps will help our interface be user friendly and interactive while having all the amazing features of the powerfull API. It will help you pick your location and range in which you are available to go to for phisical tutoring sessions, and help our algorithm to pair ou with the best tutor closest to your desired location.
---

</details>

<details>
<summary><b> 📗 Sprint 2️⃣✔️ </b></summary>

![Backlog1](/readme-images/sprint_2.PNG)

</details>

<details>
<summary><b> 📗 Sprint :three:✔️ </b></summary>

### Sprint backlog

![Sprint3Image](/readme-images/sprint_3.png)


### 🎬 User Stories checked 📰

As a unregistered user/someone without an account:

- I want to be able to register so that I can have my own personal account ✔️

As a registered user(mentor or student):

- I want to be able to login so that I can navigate on my own personal account ✔️



### Sprint outcome

This sprint includes backend and frontend.
  
Project progress after this sprint:
  - Backend: ![](https://geps.dev/progress/25)
  - Frontend: ![](https://geps.dev/progress/10)
  
> Create initial database ✔️

- Backend 

        Tables:

        Adress
        Announcement
        IdentityUser
        IdentityRole
        IdentityUserToken
        IdentityUserTokenConfirmation
        Mentor
        Review
        Student

> Login and Register ✔️

- Backend 

        Hash function for password
        Login : token (JWT token)
        Register table
        Controllers

- Frontend

![Capture](https://user-images.githubusercontent.com/96074975/214018445-bdecef09-0901-4bf6-b39a-a44488c27eaf.PNG)

  
  
 

</details>

<details>
<summary><b> 📗 Sprint :four:✔️ </b></summary>

### Sprint backlog  
  
![image](https://user-images.githubusercontent.com/96074975/213914120-280f22d9-6983-42f5-9c45-be28298bc2dc.png)

### 🎬 User Stories checked 📰
  
As a registered user(mentor or student):

- I can leave a review/rating score on the person I worked with(mentor for student/student for mentor) so that I can acknowledge my experience with them/help others get some feedback on that person ✔️
- I want to to have the ability to check the details of my profile so that I can view my personal info ✔️
- I want to manage my account(update details/delete account) so that I can leave my details up-to-date ✔️
  
As a student:

- I want to search for mentors both for online sessions and physical session so that I can find a mentor ✔️
  
As a mentor:

- I can view all my accepted students/the students I tutor so that I can have an overview on them ✔️
- I can post announcements with subjects I can teach so that I attract more students ✔️

### Sprint outcome

This sprint only includes backend.
  
Project progress after this sprint:
  - Backend: ![](https://geps.dev/progress/55)
  - Frontend: ![](https://geps.dev/progress/10)

> Table Students CRUD ✔️

- Backend 
  
       Get All Students
       Get Students By Id
       Get Students By Name (output => list)
       Get Students By Location
       Get Mentors for Current Student (We get from Match table the students who have status true - it means the student is accepted by mentor)
       Post - Update Student Profile
       Patch - Soft Delete for Student(In Identity User we change the IsDeleted Column to true)
  
> Table Announcement CRUD ✔️

- Backend 
  
        Get All Announcements
        Get All Announcements By Mentor Id
        Get Announcement By Subject
        Get Announcement By Price (Ascending and Descending Order)
        Get Announcement By Meeting Type
        Post - Create Announcement By Mentor
        Patch - Edit Announcement
        Delete Announcement By Mentor And Admin
  
  
 > Table Mentors CRUD ✔️

- Backend 
  
         Get All Mentors
         Get Mentors By Id
         Get Mentors By Name (output => list)
         Get Mentors By Location
         Get Students for Current Mentor (We get from Match table the students who have status true - it means the student is accepted by mentor)
         Post - Update Mentor Profile
         Patch - Soft Delete for Mentors (In Identity User We change the IsDeleted Column to true)
  
 
   
 > Table Review  CRUD ✔️

- Backend 
  
           Get All Reviews By Mentor Id
           Get All Reviews By Student Id
           Post - Create Review
           Get - Average Rating
           Patch - Edit comment
           Delete Review
   
  
</details>


<details>
<summary><b> 📗 Sprint :five:✔️ </b></summary>

### Sprint backlog  
  
![image](https://user-images.githubusercontent.com/96074975/213914141-0cdaed96-d419-414e-97cb-1805f3a01557.png)
  
  
 ### 🎬 User Stories checked 📰
  
As a student:

- I want to see a mentor's phone number so that I can call him/her and schedule a timeslot for the future sessions ✔️
  
As a mentor:

- I want to be able to accept/reject student requests so that I can be more selective with the students I work with ✔️
- I can generate a Google Meet/Zoom link so that it would be easier to have online tutoring sessions :interrobang:

### Sprint outcome

This sprint only includes backend.
  
Project progress after this sprint:
  - Backend: ![](https://geps.dev/progress/90)
  - Frontend: ![](https://geps.dev/progress/10)

> Table Students CRUD ✔️

- Backend 
  
      GetMentorsPhoneNumber(Guid studentId, Guid mentorId) -> intoarce numarul sau "" daca nu exista match intre ei
      Update student location
  
  
> Table Match CRUD ✔️

- Backend 
    
       Create
       GetMatchesForStudent(Guid mentorId) -> a student can see his/her requests
            1. one method for accepted requests of match
            2. one method for requests without an answer
            3. one method for rejected requests
       Update - mentor change the status of requests (accept or reject)
       Delete
       GetMatchesForMentor(Guid mentorId) -> a mentor receive requests from students
            1. one method for accepted requests of match
            2. one method for requests without an answer
            3. one method for rejected requests

  
 > Table Mentors CRUD ✔️

- Backend 
  
       GetLocationsForMentors
       GetMentorPhoneNumber
       Update Mentor location
       Update just for mentor items


> Generate zoom link :interrobang:
  
- Backend 
      
       Task In progress, but unfinished in this sprint
  
</details>


<details>
<summary><b> 📗 Sprint :six: ✔️</b></summary>

![image](https://user-images.githubusercontent.com/96074975/213914170-53111c09-45dc-49f0-b703-222927c9f478.png)

</details>



### ➡️ Helper for working in backend
<details>
[HelperBackend.docx](https://github.com/inginerie-software-22-23/proiect-inginerie-software-mandat/files/10257937/HelperBackend.docx)

</details>

### ➡️ Useful Links:

https://profilinator.rishav.dev/

https://devicon.dev/

https://github.com/tandpfun/skill-icons?ref=reactjsexample.com#example

https://github.com/tandpfun/skill-icons?ref=reactjsexample.com#icons-list

https://gist.github.com/rxaviers/7360908

https://unicode.org/emoji/charts/full-emoji-list.html


# Software Architecture

Principles of design & implementation

2. Presentation (API): the interface of the system with the outside
- One Controller per resource
- Command or query type actions; never mixed
- One DTO per action (order/query); never work with entities
- Actions in controllers are related to the resource that the controller models
- Actions in controllers, in 99% of cases, just check the model and pass the request to BL
- No business logic in the API
- Authorize accordingly
- Configured dependency lifecycle accordingly

3. Domain (Business Logic): use cases that the system implements
- One service per concept
- A method per use-case
- Use cases of order or query type;
- Orders are executed transactionally
- Paginated and filtered queries
- Services have DTOs

4. Domain (Entities): the models with which the solution works
- Entity per table
- Enums for static and referenceable nomenclature in the code

5. Data Access: abstraction over the data source
- Generic repo
- Transactional repo (by default with Unit Of Work with EF)

6. Database: data source
- Tables in FN3
- UUIDs as PKs
- Views if large and/or non-performing queries appear
- FKs where needed, Non-Clustered Indexes, cascade rules, constraints
- A lot of seed data: in the main tables in the order of tens of thousands


General principles:
- The user is at the center of the solution
- Solve the client's need well, efficiently and sustainably
- The user has access only to the minimum set of data/functionalities
- Fewer but more complex public methods are preferred over many but simple public methods
- Resources for admin/user editable configurations
- DRY, Keep it very simple

### Traditional "N-Layer" architecture applications
The application is divided into 4 layers: Business Logic, DataAccess, Common and Entities.

![image](https://user-images.githubusercontent.com/96074975/213930875-b14eff6a-59e4-437c-a96e-49804b8afb19.png)


### Repository Pattern

A Repository is used to manage aggregate persistence and retrieval. The repository mediates between the data-access layer and the domain. It decouples the domain layer from the data layer effectively. It does so by providing collection-like access to the underlying data. The repository offers a collection interface by providing methods to add, modify, remove, and fetch domain objects. This enables the domain to remain agnostic of the underlying persistence mechanism. This allows both these layers to evolve independently maintaining high cohesion with low coupling.

### Unit of Work

The unit of work pattern keeps track of all changes to aggregates. Once all updates of the aggregates in a scope are completed, the tracked changes are played onto the database in a transaction so that the database reflects the desired changes. Thus, the unit of work pattern tracks a business transaction and translates it into a database transaction, wherein steps are collectively run as a single unit. To ensure that data integrity is not compromised, the transaction commits or is rolled back discretely, thus preventing indeterminate state.

![image](https://user-images.githubusercontent.com/96074975/213930972-4c0d9c72-a2d6-4888-bd7d-9cd65baba450.png)


# Sustainability and Ethics

### What is sustainability? 

Sustainability is the quality of an activity or a product, that balances, preserves, and improves in the following three dimensions: <b> Social, Economic, Environment. </b>

In order for a product to be sustainable, it should generally be economically viable, preserve or improving existing social structures, and minimizing the environmental footprint.

### Is it MANDAT.io 🚀 sustainable?

###  Social :heavy_check_mark:

The platform promotes education and offers students the chance for cheap and quality education, guided by mentors trained in the field of interest. Mentors have        the chance to round off their income through an easy and fun way related to the studies they are following.

###  Environment :heavy_check_mark:

The platform has a positive impact because through the online meeting option, the need to use means of transport is reduced.

###  Economic :heavy_check_mark:

Future Implementation: In order to post an announcement, mentors must pay a fee. Students can search for announcement for free. Currently this is not implemented,      because the platform is in the testing period on the wide market.

