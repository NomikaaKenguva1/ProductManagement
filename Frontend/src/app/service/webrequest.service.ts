import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WebrequestService {
 private Root_url='http://localhost:8081';
  constructor(private http:HttpClient) {}
   get(uri:string){
    return this.http.get(`${this.Root_url}/${uri}`)
  }
  post(uri:string,data:any){
    return this.http.post(`${this.Root_url}/${uri}`,data)
  }
}