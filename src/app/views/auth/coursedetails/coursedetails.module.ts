import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursedetailsRoutingModule } from './coursedetails-routing.module';
import { CoursedetailsComponent } from './coursedetails.component';


@NgModule({
  declarations: [
    CoursedetailsComponent
  ],
  imports: [
    CommonModule,
    CoursedetailsRoutingModule
  ]
})
export class CoursedetailsModule { }
