import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesRoutingModule } from './courses-routing.module';
import { CoursedetailsComponent } from './coursedetails/coursedetails.component';
import { CourselistComponent } from './courselist/courselist.component';


@NgModule({
  declarations: [
    CoursedetailsComponent,
    CourselistComponent
  ],
  imports: [
    CommonModule,
    CoursesRoutingModule
  ]
})
export class CoursesModule { }
