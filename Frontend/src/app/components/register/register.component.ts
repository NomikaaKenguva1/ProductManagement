import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TasksService } from 'src/app/service/tasks.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  user:any={}
  loggedIn = false; 
  constructor(private taskservice :TasksService, private router:Router){
    this.loggedIn = false; 
  }
  addUser(){
    this.taskservice.addUser(this.user).subscribe((res)=>{
      console.log(res)
      localStorage.setItem('user', JSON.stringify(this.user));
      this.router.navigate(['/products']);
    },error=>{
      console.log(error)
    })
  }
}
