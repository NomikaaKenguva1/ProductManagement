import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TasksService } from 'src/app/service/tasks.service';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent {
  storedUser:any
  results:any;
  username:string=""
  constructor(private router: Router,private taskservice :TasksService) {
    const product = localStorage.getItem('result');
    if (product) {
      this.results = JSON.parse(product);
    }
    const storedUserData = localStorage.getItem('user');
    if (storedUserData) {
      this.storedUser = JSON.parse(storedUserData);
      this.username=this.storedUser.username;
    }
  }
  viewDetails(product:any){
    localStorage.setItem('product', JSON.stringify(product));
    this.router.navigate(['/view-details']);
  }
  getCardColor(index: number): string {
    const colors = ['card-color-1', 'card-color-2', 'card-color-3', 'card-color-4']; 
    return colors[index % colors.length];
  }
  logout() {
    localStorage.removeItem('user');
    this.router.navigate(['/login']);
  }
}
