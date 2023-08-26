import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourselistComponent } from './courselist.component';

const routes: Routes = [{
  path: '',
  component: CourselistComponent
}];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CourselistRoutingModule { }
