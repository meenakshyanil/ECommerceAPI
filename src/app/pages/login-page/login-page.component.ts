import { Component } from '@angular/core';
import {FormGroup,FormControl,Validators,FormBuilder}from '@angular/forms'
import { from } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import{Router} from '@angular/router'
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  responseText = ''
  alertClass = ''
  constructor(private formBuilder:FormBuilder,
    private authService:AuthService,private router:Router){

  }

  /*loginForm = new FormGroup({
    email:new FormControl('abc'),
    password:new FormControl()
  });*/
    loginForm = this.formBuilder.group({
      email:[null,[Validators.required,Validators.email]],
      password:[null,[Validators.required,Validators.minLength(6)]]
    })
    get email(){
      return this.loginForm.get('email')

    }
    get password(){
      return this.loginForm.get('password')

    }
    onSubmitHandler(){
      //console.log(this.loginForm.value)
      this.authService.login(this.loginForm.value)
      .subscribe((Response:any)=>{
        this.responseText = 'Login Success,Thank You'
        this.alertClass ='alert alert-success'
        localStorage.setItem('token',Response.access_token);
        this.router.navigateByUrl('')
        console.log(Response)
      },(error:any)=>{
        this.responseText  ="oops something went wrong"
        this.alertClass = "alert alert-danger"
        console.log(Response)
      });
    
    }
}
