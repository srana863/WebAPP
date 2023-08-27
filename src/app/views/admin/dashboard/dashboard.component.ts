import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/admin/user.service';
import { LoginService } from 'src/app/services/auth/login.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  countrylist=['India','USA','Singapore','UK']
  termlist=['15days','30days','45days','60days']
  public users:any = [];
  constructor(private builder:FormBuilder, private router:Router, private userService:UserService){

  }
  ngOnInit(): void {
    this.userService.getUserList().subscribe(res=>{
      this.users=res;
    });
  }

  customerform=this.builder.group({
   name:this.builder.control('',Validators.required),
   email:this.builder.control('',Validators.compose([Validators.required,Validators.required]) ),
   phone:this.builder.control('',Validators.required),
   country:this.builder.control('',Validators.required),
   address:this.builder.control('',Validators.required),
   term:this.builder.control('',Validators.required),
   dob:this.builder.control(new Date(2000,3,25)),
   gender:this.builder.control('Male'),
   status:this.builder.control(true),
  });

  SaveCustomer(){
   console.log(this.customerform.value);
  }

  clearform(){
    this.customerform.reset();
  }
}
