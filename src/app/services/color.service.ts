import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { ListReponseModel } from '../models/listResponseModel';
import { Color } from '../models/color';


@Injectable({
  providedIn: 'root'
})
export class ColorService {

  apiUrl="https://localhost:44314/api/";

  constructor(private httpClient:HttpClient) { }

  getColors(): Observable<ListReponseModel<Color>>{
    this.httpClient.get<ListReponseModel<Color>>
    let newPath = this.apiUrl + "colors"
    return this.httpClient.get<ListReponseModel<Color>>(newPath)
  }
}
