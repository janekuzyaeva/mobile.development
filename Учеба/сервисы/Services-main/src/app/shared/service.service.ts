import { Injectable } from '@angular/core'; 
import { API } from './API'; 
import {HttpClient, HttpHeaders} from '@angular/common/http'; 

@Injectable({ 
providedIn: 'root' 
})

export class HttpService extends API { 

  header = new HttpHeaders("Content-Type: application/json; charset=UTF-8");
  url = "purchases"; 
  url2="purchases/add";
  url3="purchases/edit";

constructor(public httpClient: HttpClient) { 
  super (httpClient); 

} 

async getPurchases() { 
  return this.get(this.url, this.header).toPromise(); 
} 

async postPurchases(data) { 
  return this.post(this.url2, data, this.header).toPromise(); 
} 

async putPurchases(id: number, data) { 
  return this.put(`${this.url}/${id}`, data, this.header).toPromise(); 
} 

async deletePurchases(id: number) { 
return this.delete(`${this.url}/${id}`, this.header).toPromise(); 
} 

async getPurchaseById(id: number){
  return this.get(`${this.url}/${id}`, this.header).toPromise(); 
}

}