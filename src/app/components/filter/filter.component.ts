import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Brand } from 'src/app/models/brand';
import { Car } from 'src/app/models/car';
import { Color } from 'src/app/models/color';
import { BrandService } from 'src/app/services/brand.service';
import { CarService } from 'src/app/services/car.service';
import { ColorService } from 'src/app/services/color.service';
import { RouterService } from 'src/app/services/router.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {

  brands:Brand[]=[]
  colors:Color[]=[]
  cars:Car[]=[]
  brandId: Number;
  colorId:Number;
  dataLoaded=false
  brandfilterText="";
  colorfilterText=""
  currentBrand:Brand
  currentColor:number
   
  constructor(
    private colorService:ColorService,
    private brandService:BrandService,
    private carService:CarService,
    private routerService:RouterService,
    private activatedRoute:ActivatedRoute){}

    ngOnInit():void{ 
     this.getBrands();
     this.getColors();
    }
    getCars(){
      this.carService.getCars().subscribe(response=>{
        this.cars=response.data
        this.dataLoaded=true;
      })
    }
    getBrands(){
      this.brandService.getBrands().subscribe(response=>{
        this.brands=response.data
        this.dataLoaded=true
      })
    }
    getColors(){
      this.colorService.getColors().subscribe(response=>{
        this.colors =response.data
        this.dataLoaded=true
      })
    }
    gotoColorIdPage(){
      this.routerService.gotoColorIdPage(this.currentColor)
    }
}
