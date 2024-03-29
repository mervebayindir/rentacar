import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Brand } from '../models/brand';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  apiUrl="https://localhost:44315/api/brands/";
  constructor(private httpClient:HttpClient) { }

  getBrands(): Observable<ListResponseModel<Brand>>{
    this.httpClient.get<ListResponseModel<Brand>>
    let newPath =this.apiUrl + "getall";
    return this.httpClient.get<ListResponseModel<Brand>>(newPath)
  }
}
