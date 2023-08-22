import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/auth/login.service';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit{
 
  constructor(private auth:LoginService){

  }

  ngOnInit(): void {
  }

  logout(){
    this.auth.logOut();
  }

  // badgevisible = false;
  // badgevisibility() {
  //   this.badgevisible = true;
  // }

}
