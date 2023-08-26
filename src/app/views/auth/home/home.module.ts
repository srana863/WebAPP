import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HomeheroComponent } from '../homehero/homehero.component';
import { HomeaboutComponent } from '../homeabout/homeabout.component';
import { HomecountComponent } from '../homecount/homecount.component';
import { HomewhyusComponent } from '../homewhyus/homewhyus.component';
import { HomefeaturesComponent } from '../homefeatures/homefeatures.component';
import { HomepopularcoursesComponent } from '../homepopularcourses/homepopularcourses.component';
import { HometrainersComponent } from '../hometrainers/hometrainers.component';

@NgModule({
  declarations: [
    HomeComponent,
    HomeheroComponent,
    HomeaboutComponent,
    HomecountComponent,
    HomewhyusComponent,
    HomefeaturesComponent,
    HomepopularcoursesComponent,
    HometrainersComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
