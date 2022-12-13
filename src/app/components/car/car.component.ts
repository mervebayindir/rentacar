import { Component } from '@angular/core';
import { faLiraSign } from '@fortawesome/free-solid-svg-icons';
import {library} from '@fortawesome/fontawesome-svg-core';
import { Car } from 'src/app/models/car';
import { CarService } from 'src/app/services/car.service';
library.add(faLiraSign);

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent {

  cars:Car[]=[];
  dataLoaded=false;
  faLira = faLiraSign;
  constructor(private carService:CarService){}

  ngOnInit():void{
    this.getCars();
  }
  getCars(){
    this.carService.getCars().subscribe(response=>{
      this.cars=response.data
      this.dataLoaded=true;
    })
  }
  getCarsByBrand(brandId:number){
    this.carService.getCarsByBrand(brandId).subscribe(ressponse=>{
      this.cars =ressponse.data
      this.dataLoaded=true
    })
  }
  getCarsByColor(colorId:number){
    this.carService.getCarsByColor(colorId).subscribe(response=>{
      this.cars=response.data
      this.dataLoaded=true;
    })
  }
}
