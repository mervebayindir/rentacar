import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Rental } from '../models/rental';
import { SingleResponseModel } from '../models/singleResponseModel';

@Injectable({
  providedIn: 'root'
})
export class RentalService {

  apiUrl="https://localhost:44315/api/rentals";
  constructor(private httpClient:HttpClient) { }

  getRentals(): Observable<ListResponseModel<Rental>>{
    let newPath = this.apiUrl + "getdetails";
    return this.httpClient.get<ListResponseModel<Rental>>(newPath)
  }
  getRentalByCarIdd(rentalId:number): Observable<SingleResponseModel<Rental>>{
    let newPath=this.apiUrl + "getbyid?rentalId=" + rentalId
    return this.httpClient.get<SingleResponseModel<Rental>>(newPath)
  }
}
