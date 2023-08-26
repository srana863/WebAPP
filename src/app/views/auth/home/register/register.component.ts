import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import ValidateForm from 'src/app/helpers/validateform';
import { LoginService } from 'src/app/services/auth/login.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  type:string="password";
  isText:boolean=false;
  eyeItem:string="fa-eye-slash";
  signUp!:FormGroup;
  constructor(private fb:FormBuilder, private auth:LoginService, private router:Router,private toast:ToastrService){

  }
  ngOnInit():void{
    this.signUp=this.fb.group({
      firstname:['',Validators.required],
      lastname:['',Validators.required],
      username:['',Validators.required],
      email:['',Validators.required],
      password:['',Validators.required]
    });

  }
  onSubmit(){
    if(this.signUp.valid){
      this.auth.signUp(this.signUp.value).subscribe({
        next:(res)=>{
          this.toast.success(res.message);
          this.signUp.reset();
          this.router.navigate(['auth/login']);
        },
        error:(err)=>{
          this.toast.error("Some things went wrong");
        }
      });
    }else{
      ValidateForm.validateAllFormFileds(this.signUp);
     
    }
  }

  hideShowPass(){
    this.isText=!this.isText;
    this.isText?this.eyeItem="fa-eye": this.eyeItem="fa-eye-slash";
    this.isText?this.type="text":this.type="password";

  }
}
