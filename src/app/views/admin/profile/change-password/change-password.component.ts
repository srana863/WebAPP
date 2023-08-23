import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent {
  countrylist=['India','USA','Singapore','UK']
  termlist=['15days','30days','45days','60days']

  constructor(private builder:FormBuilder){

  }
  ngOnInit(): void {
   
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
