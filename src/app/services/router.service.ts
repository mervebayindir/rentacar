import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouterService {

  constructor(private routerService:Router) { }

  gotoColorIdPage(colorId:number){
    if(colorId>0)
    this.routerService.navigate([`/color/${colorId}`])
  }

}
