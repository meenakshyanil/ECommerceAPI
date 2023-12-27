// import { inject } from '@angular/core';
// import { CanActivateFn } from '@angular/router';
// import { AuthService } from '../services/auth.service';

import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { AuthService } from "../services/auth.service";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";

// export const authGuard: CanActivateFn = (route, state) => {
//   return inject(AuthService).getToken();
// };
@Injectable({
  providedIn:'root'
})
export class AuthGuard implements CanActivate{
  constructor(private authService:AuthService,private router:Router){}
 
  
  canActivate():boolean{
    if(this.authService.getToken()){
      return true;
    }else{
      this.router.navigateByUrl('login')
      return false;
    }
  }
}
