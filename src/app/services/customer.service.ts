import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { ListReponseModel } from '../models/listResponseModel';
import { Customer } from '../models/customer';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  apiUrl="https://localhost:44315/api/";
  constructor(private httpClient:HttpClient) { }

  getCustomers(): Observable<ListReponseModel<Customer>>{
    this.httpClient.get<ListReponseModel<Customer>>
    let newPath = this.apiUrl + "customers/getall";
    return this.httpClient.get<ListReponseModel<Customer>>(newPath)
    
  }
  
}
