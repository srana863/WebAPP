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
