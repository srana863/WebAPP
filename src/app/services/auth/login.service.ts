import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Router } from '@angular/router';
import {JwtHelperService} from '@auth0/angular-jwt'
import { TokenApiModel } from '../../models/loginModel';
import { CommonService } from '../common.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private baseUrl:string="";
  private userPayLoad:any;
  constructor(private http:HttpClient,private route:Router, private common:CommonService) {   
    this.userPayLoad=this.decodedToken();
    this.baseUrl=this.common.apiUrl+'User/';
  }
  signUp(userObj:any)
  {
    return this.http.post<any>(`${this.baseUrl}register`,userObj);
  }
  logIn(loginObj:any){
    return this.http.post<any>(`${this.baseUrl}authenticate`,loginObj);
  }

  logOut(){
    localStorage.clear();
    this.route.navigate(['auth','login']);
  }


  storeToken(tokenValue:string)
  {
    localStorage.setItem('token',tokenValue); 
  }
  storeRefreshToken(tokenValue:string)
  {
    localStorage.setItem('refreshToken',tokenValue); 
  }
  getToken()
  {
    return localStorage.getItem('token');
  }
  getRefreshToken()
  {
    return localStorage.getItem('refreshToken');
  }
  isLoggedIn():boolean{
    return !!localStorage.getItem('token');
  }
  decodedToken(){
    const jwtHelper=new JwtHelperService();
    const token=this.getToken()!;
    return jwtHelper.decodeToken(token);
  }
  getFullNameFromToken(){
    if(this.userPayLoad){
      return this.userPayLoad.name;
    }
  }
  getRoleFromToken(){
    if(this.userPayLoad){
      return this.userPayLoad.role;
    }
  }
  renewToken(tokenApi:TokenApiModel){
    return this.http.post<any>(`${this.baseUrl}refresh`,tokenApi);
  }
}
