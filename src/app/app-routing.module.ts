import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './layouts/admin/admin.component';
import { AuthComponent } from './layouts/auth/auth.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/auth/home',
    pathMatch: 'full'
  },
  {
    path: 'auth',
    component: AuthComponent,
    children: [
      {
        path: 'login',
        loadChildren: () => import('./views/auth/login/login.module').then(m => m.LoginModule)
      },
      {
        path: 'register',
        loadChildren: () => import('./views/auth/register/register.module').then(m => m.RegisterModule)
      },
      {
        path: 'home',
        loadChildren: () => import('./views/auth/home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'about',
        loadChildren: () => import('./views/auth/about/about.module').then(m => m.AboutModule)
      },
      {
        path: 'course',
        loadChildren: () => import('./views/auth/course/course.module').then(m => m.CourseModule)
      },
      {
        path: 'coursedetails',
        loadChildren: () => import('./views/auth/coursedetails/coursedetails.module').then(m => m.CoursedetailsModule)
      },
      {
        path: 'trainers',
        loadChildren: () => import('./views/auth/trainers/trainers.module').then(m => m.TrainersModule)
      },
      {
        path: 'events',
        loadChildren: () => import('./views/auth/events/events.module').then(m => m.EventsModule)
      },
      {
        path: 'pricing',
        loadChildren: () => import('./views/auth/pricing/pricing.module').then(m => m.PricingModule)
      },
      {
        path: 'contact',
        loadChildren: () => import('./views/auth/contact/contact.module').then(m => m.ContactModule)
      }

    ]
  },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate:[AuthGuard],
    children: [
      {
        path: 'dashboard',
        loadChildren: () => import('./views/admin/dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: 'profile',
        loadChildren: () => import('./views/admin/profile/profile.module').then(m => m.ProfileModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    bindToComponentInputs: true
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
