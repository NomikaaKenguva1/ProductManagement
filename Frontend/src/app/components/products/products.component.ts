import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { max } from 'rxjs';
import { TasksService } from 'src/app/service/tasks.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  search: any = {};
  results: any = {};
  products: any = {};
  storedUser: any;
  username: string = '';
  filter: string = '';
  filterset = false;
  view = false;
  selectedProduct: any = {};
  priceFilter: string = '';
  sortDirection: string = ''; 
  

  constructor(private router: Router, private taskservice: TasksService) {
    const storedUserData = localStorage.getItem('user');
    if (storedUserData) {
      this.storedUser = JSON.parse(storedUserData);
      this.username = this.storedUser.username;
    }
  }

  ngOnInit() {
    this.getAllProducts();
  }

  logout() {
    localStorage.removeItem('user');
    this.router.navigate(['/login']);
  }

  setFilter() {
    this.filter = this.search.filter;
  }

  setPriceFilter() {
    this.priceFilter = this.search.priceFilter;
  }

  getCardColor(index: number): string {
    const colors = ['card-color-1', 'card-color-2', 'card-color-3', 'card-color-4'];
    return colors[index % colors.length];
  }

  getAllProducts() {
    this.taskservice.getAllProducts().subscribe(
      (res) => {
        console.log(res);
        this.products = res;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  searching() {
    console.log(this.search);
    this.setFilter();
    if (this.filter === 'productcode') {
      this.taskservice.getProductByProductCode(this.search.productinp).subscribe(
        (res) => {
          this.results = res;
          this.filterset = false;
          localStorage.setItem('result', JSON.stringify(this.results));
          this.router.navigate(['/search-result']);
        },
        (error) => {
          console.log(error);
        }
      );
    } else if (this.search.filter === 'productname') {
      this.taskservice.getProductByProductName(this.search.productinp).subscribe(
        (res) => {
          this.results = res;
          this.filterset = false;
          localStorage.setItem('result', JSON.stringify(this.results));
          this.router.navigate(['/search-result']);
        },
        (error) => {
          console.log(error);
        }
      );
    } else if (this.search.filter === 'brand') {
      this.taskservice.getProductByBrand(this.search.productinp).subscribe(
        (res) => {
          this.results = res;
          localStorage.setItem('result', JSON.stringify(this.results));
          this.router.navigate(['/search-result']);
        },
        (error) => {
          console.log(error);
        }
      );
    } else {
      this.filterset = true;
    }
  }

  viewDetails(product:any){
    localStorage.setItem('product', JSON.stringify(product));
    this.router.navigate(['/view-details']);
  }

  applyFilter() {
    const filteredProducts = this.products.filter((product: any) => {
     
      return true;
    });
  
    if (this.sortDirection === 'lowToHigh') {
      filteredProducts.sort((a: any, b: any) => parseFloat(a.price) - parseFloat(b.price));
    } else if (this.sortDirection === 'highToLow') {
      filteredProducts.sort((a: any, b: any) => parseFloat(b.price) - parseFloat(a.price));
    }
  
    this.products = filteredProducts;
  }
  
}
