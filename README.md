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

# 🔒 Git and GitHub Conventions

<details>
<summary><i><b>Branch Names</b></i></summary>

---

> `type/summary`

Branch names should be all lower case and contain only "/" and "-" as a special characters.
Spaces between words should be replaced by the character "-".

##### ✔️ type:

-   feature
-   fix
-   patch
-   remove

##### 📜 summary:

Always must be in present tense.
Describes the changes made.

#### Branch Examples:

> `feature/add-dropdown-bullets`
>
> `fix/get-account-info-endpoint`
>
> `patch/refactor-method-names`
>
> `remove/unused-queries`

---

</details>



<details>
<summary><i><b>Commit Names</b></i></summary>

---

> type(project): summary

Commit names should be all lower case and contain only ":", "(", ")" as special characters.

##### ✔️ type:

-   feature
-   fix
-   patch
-   refactor
-   remove

##### 🏭 project:

-   fe -> Front-End
-   be -> Back-End
-   db -> Database
-   do -> DevOps

##### 📜 summary:

Always must be in **present tense**.
Describes the changes made.
Each word is separated by a single space character.
After the ":", put a space please. :)

#### Commit Examples:

> `feature(fe): add dropdown bullets`
>
> `fix(be): get account info endpoint`
>
> `patch(be): reduce method queries`
>
> `refactor(fe/be): variable names`
>
> `remove(db): unused rows`

---

</details>


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
    
---
</details>

<details>
 <summary><b>Prioritized Product Backlog</b> :page_with_curl: :judge:</summary>

![BacklogImage](/readme-images/backlog.png)

</details>


# 📚 Sprints 📚

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

![Sprint3Image](/readme-images/sprint_3.png)

</details>

<details>
<summary><b> 📗 Sprint :four:✔️ </b></summary>

![image](https://user-images.githubusercontent.com/96074975/213914120-280f22d9-6983-42f5-9c45-be28298bc2dc.png)

</details>


<details>
<summary><b> 📗 Sprint :five:✔️ </b></summary>

![image](https://user-images.githubusercontent.com/96074975/213914141-0cdaed96-d419-414e-97cb-1805f3a01557.png)

</details>


<details>
<summary><b> 📗 Sprint :six: </b></summary>

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

