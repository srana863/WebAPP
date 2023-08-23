import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { LoginService } from '../services/auth/login.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError,switchMap } from 'rxjs/operators';
import { TokenApiModel } from '../models/loginModel';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private auth:LoginService,private toast:ToastrService ,private router:Router) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const myToken=this.auth.getToken();
    if(myToken){
      request=request.clone({
        setHeaders:{Authorization:`Bearer ${myToken}`}
      });
    }
    return next.handle(request).pipe(
      catchError((err:any)=>{
        if(err instanceof HttpErrorResponse){
          if(err.status===401){
            return this.handleUnAuthorizedError(request,next);
          }
        }
        return throwError(()=> new Error("Some Other error occured"));
      })
    );
  }
  handleUnAuthorizedError(request:HttpRequest<any>,next:HttpHandler){
    let tokenApiModel=new TokenApiModel();
    tokenApiModel.accessToken=this.auth.getToken()!;
    tokenApiModel.refreshToken=this.auth.getRefreshToken()!;
    return this.auth.renewToken(tokenApiModel).pipe(switchMap((data:TokenApiModel)=>{
      this.auth.storeRefreshToken(data.refreshToken);
      this.auth.storeToken(data.accessToken);
      request=request.clone({
        setHeaders:{Authorization:`Bearer ${data.accessToken}`}
      });
      return next.handle(request);
    }),catchError(()=>{
      return throwError(()=>{
        this.toast.warning("Token has expired, Please login again");
        this.router.navigate(['auth','login']);
      })
    })
    );
  }
}


