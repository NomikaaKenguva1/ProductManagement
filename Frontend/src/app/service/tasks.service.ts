import { Injectable } from '@angular/core';
import { WebrequestService } from './webrequest.service';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  constructor(private webreqser:WebrequestService) { }
  getUser(username:String){
    return this.webreqser.get('user/'+username);
  }
  addUser(data:any){
    return this.webreqser.post('users',data);
  }
  getAllProducts(){
    return this.webreqser.get('products')
  }
  getProductByProductName(name:string){
    return this.webreqser.get('products/'+name)
  }
  getProductByBrand(brand:string){
    return this.webreqser.get("product/"+brand)
  }
  getProductByProductCode(productcode:BigInteger){
    return this.webreqser.get('produc/'+productcode)
  }
  getEstimatedDates(pincode:string){
    return this.webreqser.get('check/'+pincode)
  }
}