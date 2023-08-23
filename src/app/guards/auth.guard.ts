import { Injectable, inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LoginService } from '../services/auth/login.service';


@Injectable({
  providedIn: 'root'
})
class authGuard {
constructor(private auth:LoginService,private router:Router,private toast:ToastrService){}

  canActivate(route:ActivatedRouteSnapshot, state: RouterStateSnapshot):boolean{
    if(this.auth.isLoggedIn()){
      return true;
    }else{
      this.toast.error("Login First","ERROR");
      this.router.navigate(['auth','login']);
      return false;
    }
  }
}


export const AuthGuard: CanActivateFn = (route:ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  return inject(authGuard).canActivate(route,state);
}
