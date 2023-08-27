import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import ValidateForm from 'src/app/helpers/validateform';
import { LoginService } from 'src/app/services/auth/login.service';
import { CommonService } from 'src/app/services/common/common.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  type:string="password";
  isText:boolean=false;
  eyeItem:string="fa-eye-slash";
  loginForm!:FormGroup;
  constructor(
    private fb:FormBuilder,private auth:LoginService,private router:Router,private toast:ToastrService,private userStore:CommonService){

  }
  ngOnInit():void{
    if(this.auth.isLoggedIn()){
      this.router.navigate(['admin','dashboard']);
    }
    this.loginForm=this.fb.group({
      username:['',Validators.required],
      password:['',Validators.required]
    });
  }
  onLogin(){
    if(this.loginForm.valid){
      this.auth.logIn(this.loginForm.value).subscribe({
        next:(res)=>{
          this.auth.storeToken(res.accessToken);
          this.auth.storeRefreshToken(res.refreshToken);
          //const tokenPayload=this.auth.decodedToken();
          // this.userStore.setFullNameForStore(tokenPayload.name);
          // this.userStore.setRoleForStore(tokenPayload.role);
          this.toast.success("Welcome");
          this.loginForm.reset();
          this.router.navigate(['admin','dashboard']);
        },
        error:(err)=>{
          this.toast.error("Some things went wrong");
        }
      });
    }else{
      ValidateForm.validateAllFormFileds(this.loginForm);
    }
  }

  hideShowPass(){
    this.isText=!this.isText;
    this.isText?this.eyeItem="fa-eye": this.eyeItem="fa-eye-slash";
    this.isText?this.type="text":this.type="password";
  }
}
