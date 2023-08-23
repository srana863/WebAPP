import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  public apiUrl:string="https://localhost:7105/api/";

  private fullName$=new BehaviorSubject<string>("");
  private role$=new BehaviorSubject<string>("");

  constructor() { }

  public getRoleFromStore(){
    return this.role$.asObservable();
  }
  public setRoleForStore(role:string){
    this.role$.next(role);
  }
  public getFullNameFromStore(){
    return this.fullName$.asObservable();
  }
  public setFullNameForStore(fullname:string){
    this.fullName$.next(fullname);
  }
}