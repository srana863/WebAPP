import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from '../common/common.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient,private route:Router,private commonServices:CommonService) { }

  getUserList()
  {
    return this.http.get<any>(`${this.commonServices.apiUrl}User`);
  }
}
