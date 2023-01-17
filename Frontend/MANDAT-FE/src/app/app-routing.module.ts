import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginComponent } from './pages/login/login.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { RegisterComponent } from './pages/register/register.component';
import { MatchingFormComponent } from './pages/matching-form/matching-form.component';

import { MyMentorsComponent } from './pages/my-mentors/my-mentors.component';

import { MentorRequestsComponent } from './pages/mentor-requests/mentor-requests.component';
import { MyStudentsComponent } from './pages/my-students/my-students.component';



const routes: Routes = [

  {path: 'home', component: HomePageComponent},

  { path: 'match', component: MatchingFormComponent  },

  { path: 'my-students', component: MyStudentsComponent  },



  {path: 'my-mentors', component: MyMentorsComponent},
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {path: 'requests', component: MentorRequestsComponent},
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
