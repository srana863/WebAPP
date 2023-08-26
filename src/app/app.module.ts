import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AdminComponent } from 'src/app/layouts/admin/admin.component';
import { AuthComponent } from 'src/app/layouts/auth/auth.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { MaterialModule } from './material.module';
import { TokenInterceptor } from './interceptor/token.interceptor';
import { AuthheaderComponent } from './layouts/authheader/authheader.component';
import { AuthfooterComponent } from './layouts/authfooter/authfooter.component';
import { PageNotFoundComponent } from './views/auth/page-not-found/page-not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    AdminComponent,
    AuthheaderComponent,
    AuthfooterComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    MaterialModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [{
    provide:HTTP_INTERCEPTORS,
    useClass:TokenInterceptor,
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
