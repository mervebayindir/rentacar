import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Brand } from 'src/app/models/brand';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent {

  brands:Brand[]=[];
  currentBrand:Brand;
  dataLoaded=false
  brandfilterText:""
  brandId:number

  constructor(
    private brandService:BrandService,
    private router:Router){}

  ngOnInit(): void{
    this.getBrands();
  }
  getBrands(){
    this.brandService.getBrands().subscribe(response=>{
      this.brands=response.data
      this.dataLoaded=true
    })
  }
  setCurrentBrand(brand:Brand){   //seçilen brand
    this.currentBrand !==brand
  }
  getCurrentBrandClass(brand:Brand){ //secılen brand list-group-item active olsun mu
    if(brand==this.currentBrand){
      return "list-group-item active"
    }else{
      return "list-group-item"
    }
  }
  getAllBrandClass(){
    if(!this.currentBrand){
      return "list-group-item active"
    }else{
      return "list-group-item"
    }
  }
  /* filter(brandId:number){
    if(this.brandId != brandId){
     return this.router.navigate(['/cars/brand/' + brandId])
    }
    else{
      return this.router.navigate([`/cars/`]);
    }
  } */
}
