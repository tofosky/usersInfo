import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import  {FeatureModule} from 'src/app/featureModule/feature/feature.module';import {HeaderComponent} from 'src/app/featureModule/website/header/header.component'
 import {FooterComponent} from 'src/app/featureModule/website/footer/footer.component';
 import {MatIconModule} from '@angular/material/icon';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesComponent } from './Course/courses/courses.component';
import { LecturerComponent } from './Lecturer/lecturer/lecturer.component';
import { ApiContentComponent } from './Api/api-content/api-content.component';

@NgModule({
  declarations: [
    AppComponent,
    LecturerComponent,
    CoursesComponent,
    ApiContentComponent,
    HeaderComponent,
    FooterComponent
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FeatureModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
