import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesComponent } from './courses.component';

const routes: Routes = [{
  path: '',
  component: CoursesComponent,
  children: [
    {
      path: 'coursedetails',
      loadChildren: () => import('./coursedetails/coursedetails.module').then(m => m.CoursedetailsModule)
    },
    {
      path: 'courselist',
      loadChildren: () => import('./courselist/courselist.module').then(m => m.CourselistModule)
    },
]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursesRoutingModule { }
