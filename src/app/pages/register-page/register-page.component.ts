import { Component } from '@angular/core';
import { IUser } from 'src/app/models/user.model';
@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent {
  userModel:IUser={}
  constructor(){
    //sample data
    //this.userModel={
      //firstName:"mark",
      //email:"mm@gmail",
     // mobile:99999,
     // password:'1234'
    }
    onSubmitHandler(){
      console.log(this.userModel)
    }
  }


