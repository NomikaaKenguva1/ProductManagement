import { Component } from '@angular/core';
import { TasksService } from 'src/app/service/tasks.service';

import { Router } from '@angular/router';
import { AbstractControl, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username:string="";
  password:string="";
  Dbresponse:any;
  loginError = false;
  loggedIn = false; 
  user:any={}
  constructor(private taskservice :TasksService, private router:Router){
    this.loggedIn = false;
  }
  getUser(){
    this.taskservice.getUser(this.user.username).subscribe((res)=>{
      this.Dbresponse=res;
      console.log("hello response",this.Dbresponse);
      if(this.user.password===this.Dbresponse.password){
        console.log("login successfully",this.Dbresponse.password)
        localStorage.setItem('user', JSON.stringify(this.user));
        this.loggedIn = true; 
        this.router.navigate(['/products']);
      }else{
        this.loginError = true;
      }
    },error=>{
      console.log(error)
      this.loginError = true;
    })
  }
}
