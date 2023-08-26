import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';

const routes: Routes = [{
  path: '',
  component: HomeComponent,
  children: [
    {
      path: 'about',
      loadChildren: () => import('./about/about.module').then(m => m.AboutModule)
    },
    {
      path: 'contact',
      loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule)
    },
    {
      path: 'courses',
      loadChildren: () => import('./courses/courses.module').then(m => m.CoursesModule)
    },
    {
      path: 'events',
      loadChildren: () => import('./events/events.module').then(m => m.EventsModule)
    },
    {
      path: 'pricing',
      loadChildren: () => import('./pricing/pricing.module').then(m => m.PricingModule)
    },
    {
      path: 'trainers',
      loadChildren: () => import('./trainers/trainers.module').then(m => m.TrainersModule)
    },
    {
      path: 'login',
      loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
    },
    {
      path: 'register',
      loadChildren: () => import('./register/register.module').then(m => m.RegisterModule)
    },

  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
