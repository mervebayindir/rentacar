import { Component } from '@angular/core';
import { faLiraSign } from '@fortawesome/free-solid-svg-icons';
import {library} from '@fortawesome/fontawesome-svg-core';
import { Car } from 'src/app/models/car';
import { CarService } from 'src/app/services/car.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CarDetail } from 'src/app/models/carDetail';
import { ToastrService } from 'ngx-toastr';
import { CartService } from 'src/app/services/cart.service';
library.add(faLiraSign);

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent {

  cars:Car[]=[];
  carDetail:CarDetail[]
  dataLoaded=false;
  carfilterText="";
  faLira = faLiraSign;
  constructor(
    private carService:CarService,
    private activatedRoute:ActivatedRoute,
    private toastrService:ToastrService,
    private cartService:CartService) {}

  ngOnInit():void{
    this.load()
  }
  load(){
    this.activatedRoute.params.subscribe(params=>{ //activatedroute filtreleme işleminde url yonlendırmesı yapar
      
      if (params["colorId"] && params["brandId"]) {
        this.getCarsByFilter(params["brandId"], params["colorId"]);
      }
      else if(params["brandId"]){
        this.getCarsByBrand(params["brandId"])
      }
      else if(params["colorId"]){
        this.getCarsByColor(params["colorId"])
      }
      else {
        this.getCars();
      }
    })
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
  getCarByBrandAndColor(brandId: number, colorId: number) {
    this.carService
      .getCarByBrandAndColor(brandId, colorId)
      .subscribe((response) => {
        this.cars = response.data;
        //this.cars = this.cars.filter(c => c.carId != sildiğinId)   sildikten sonra listeyi gerı cağırma 
        this.dataLoaded = true;
      });
  }
  getCarsByFilter(brandId:number, colorId: number) {
    this.carService.getCarByBrandAndColor(brandId,colorId).subscribe(response=>{
      this.cars = response.data
      this.dataLoaded = true;
    })
  }
 /*  gotoCarDetailPage(carId:number){
    this.routerService.navigate([`/cardetail/${carId}`])
  } */
  addToCart(car:Car){
    if(car.carId)
    this.toastrService.success("Sepete eklendi", car.carName)
    this.cartService.addToCart(car);
    console.log(car)
  }
}
