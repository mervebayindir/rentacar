import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ListResponseModel } from '../models/listResponseModel';
import { Car } from '../models/car';
import { Observable } from 'rxjs';
import { CarDetail } from '../models/carDetail';
import { SingleResponseModel } from '../models/singleResponseModel';


@Injectable({
  providedIn: 'root'
})
export class CarService {

   apiUrl="https://localhost:44315/api/";

  constructor(private httpClient:HttpClient) { }

  getCars(): Observable<ListResponseModel<Car>>{
    let newPath = this.apiUrl + "cars/getdetails"
      return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }
  getCarsByBrand(brandId:number):Observable<ListResponseModel<Car>>{
    let newPath = this.apiUrl + "cars/getdetailsbybrandid?brandId=" + brandId
    return this.httpClient.get<ListResponseModel<Car>>(newPath); 
  }
  getCarsByColor(colorId:number): Observable<ListResponseModel<Car>>{
    let newPath = this.apiUrl + "cars/getdetailsbycolorid?colorId=" + colorId 
    return this.httpClient.get<ListResponseModel<Car>>(newPath); 
  }
  getCarByBrandAndColor(brandId:number, colorId:number): Observable<ListResponseModel<Car>>{
    let newPath=this.apiUrl + `cars/getcarsbyfilter?brandId=${brandId}&colorId=${colorId}`;
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }
  getCarDetailById(carId:number): Observable<SingleResponseModel<CarDetail>>{
    let newPath = this.apiUrl + "cars/getdetailbyid?carId=" + carId;
    return this.httpClient.get<SingleResponseModel<CarDetail>>(newPath);
  }
 
}
