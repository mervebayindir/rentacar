import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListReponseModel } from '../models/listResponseModel';
import { Brand } from '../models/brand';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  apiUrl="https://localhost:44314/api/";
  constructor(private httpClient:HttpClient) { }

  getBrands(): Observable<ListReponseModel<Brand>>{
    this.httpClient.get<ListReponseModel<Brand>>
    let newPath =this.apiUrl + "brands";
    return this.httpClient.get<ListReponseModel<Brand>>(newPath)
  }
}