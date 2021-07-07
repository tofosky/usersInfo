import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CoursesComponent } from './Course/courses/courses.component';
import { LecturerComponent } from './Lecturer/lecturer/lecturer.component';

const routes: Routes = [
  // {path:'', component:AppComponent},
  // {path:'lecturer', component:LecturerComponent},
  // {path:'courses', component:CoursesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
