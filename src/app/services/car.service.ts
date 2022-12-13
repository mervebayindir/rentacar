import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ListReponseModel } from '../models/listResponseModel';
import { Car } from '../models/car';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CarService {

   apiUrl="https://localhost:44314/api/";

  constructor(private httpClient:HttpClient) { }

  getCars(): Observable<ListReponseModel<Car>>{
    this.httpClient.get<ListReponseModel<Car>>
    let newPath = this.apiUrl + "cars/getall"
      return this.httpClient.get<ListReponseModel<Car>>(newPath);
  }
  getCarsByBrand(brandId:number):Observable<ListReponseModel<Car>>{
    this.httpClient.get<ListReponseModel<Car>>
    let newPath = this.apiUrl + "cars/detailsbybrand?id=" + brandId
    return this.httpClient.get<ListReponseModel<Car>>(newPath);
  }
  getCarsByColor(colorId:number): Observable<ListReponseModel<Car>>{
    this.httpClient.get<ListReponseModel<Car>>
    let newPath = this.apiUrl + "cars/detailsbybrand?id=" + colorId
    return this.httpClient.get<ListReponseModel<Car>>(newPath);
  }
  
}
