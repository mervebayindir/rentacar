import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Brand } from 'src/app/models/brand';
import { Car } from 'src/app/models/car';
import { Color } from 'src/app/models/color';
import { BrandService } from 'src/app/services/brand.service';
import { CarService } from 'src/app/services/car.service';
import { ColorService } from 'src/app/services/color.service';

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
    private router:Router,){}

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
    applyFilter() {
      if(this.brandId != null && this.colorId != null) {
        this.router.navigate(['/cars/filter/' + this.brandId + "/" + this.colorId])
      }
      else if(this.colorId != null) {
        this.router.navigate(['/cars/filterColor/' + this.colorId])
      }
      else if(this.brandId != null) {
        this.router.navigate(['/cars/filterBrand/' + this.brandId])
      }
    }
}
