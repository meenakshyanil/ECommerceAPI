import { Injectable } from '@angular/core';
import { IUser } from '../models/user.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }
  private Base_URL='https://api.escuelajs.co/api/v1'
  //register
  register(user:IUser):Observable<any>{
    return this.http.post<any>(`${this.Base_URL}/auth/register`,user)
  }
  // isLoggedIn(): boolean {
  //   // Retrieve token or user credentials from localStorage/sessionStorage
  //   const token = localStorage.getItem('token');
  //   // Check if the token exists and meets certain criteria (could be token expiry, etc.)
  //   return !!token; // If a token exists, consider the user logged in
  // }
    getToken():boolean{
      if(localStorage.getItem('token')){
        return true;
      }else{
        return false;
      }
    }

  //login
  login(user:any):Observable<any>{
    return this.http.post<any>(`https://api.escuelajs.co/api/v1/auth/login`,user)
  }
  logout(){
    localStorage.clear();
  }
}
