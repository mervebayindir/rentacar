import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListReponseModel } from '../models/listResponseModel';
import { Rental } from '../models/rental';

@Injectable({
  providedIn: 'root'
})
export class RentalService {

  apiUrl="https://localhost:44315/api/";
  constructor(private httpClient:HttpClient) { }

  getRentals(): Observable<ListReponseModel<Rental>>{
    this.httpClient.get<ListReponseModel<Rental>>
    let newPath = this.apiUrl + "rentals/getall";
    return this.httpClient.get<ListReponseModel<Rental>>(newPath)
  }

}
