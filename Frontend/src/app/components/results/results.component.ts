import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TasksService } from 'src/app/service/tasks.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent {
  product:any;
  storedUser:any;
  username:string=""
  pincode:any
  response:any
  error: string = "";

  constructor(private router: Router,private taskservice :TasksService) {
    const product = localStorage.getItem('product');
    if (product) {
      this.product = JSON.parse(product);
    }
    const storedUserData = localStorage.getItem('user');
    if (storedUserData) {
      this.storedUser = JSON.parse(storedUserData);
      this.username=this.storedUser.username;
    }
  }
  logout() {
    localStorage.removeItem('user');
    localStorage.removeItem('product');
    localStorage.removeItem('result');
    this.router.navigate(['/login']);
  }


check() {
  this.taskservice.getEstimatedDates(this.pincode).subscribe(
    (res) => {
      console.log(res);
      this.response = res;
      this.error = "";
    },
    (error) => {
      console.log(error);
      this.error = "No service available.";
      this.response = {};
    }
  );
}
}
