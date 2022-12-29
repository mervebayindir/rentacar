import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CarImage } from '../models/carImage';
import { ListResponseModel } from '../models/listResponseModel';
import { Observable } from 'rxjs';
import { SingleResponseModel } from '../models/singleResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarImageService {

  apiUrl="https://localhost:44315/api/carImages";

  constructor(private httpClient:HttpClient) { }

  getAllByCarId(carId:number): Observable<ListResponseModel<CarImage>>{
    let newPath= this.apiUrl + "/getallbycarid?carId=" + carId;
    return this.httpClient.get<ListResponseModel<CarImage>>(newPath)
  }
}
