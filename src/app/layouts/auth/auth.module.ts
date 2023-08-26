import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthheaderComponent } from '../authheader/authheader.component';
import { AuthfooterComponent } from '../authfooter/authfooter.component';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
