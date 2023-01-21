import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { ListResponseModel } from '../models/listResponseModel';
import { Customer } from '../models/customer';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  apiUrl="https://localhost:44315/api/customers/";
  constructor(private httpClient:HttpClient) { }

  getCustomers(): Observable<ListResponseModel<Customer>>{
    this.httpClient.get<ListResponseModel<Customer>>
    let newPath = this.apiUrl + "getall";
    return this.httpClient.get<ListResponseModel<Customer>>(newPath)
  }
  
}
