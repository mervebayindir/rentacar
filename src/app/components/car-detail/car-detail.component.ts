import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarDetail } from 'src/app/models/carDetail';
import { CarImage } from 'src/app/models/carImage';
import { CarImageService } from 'src/app/services/car-image.service';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent {

  carDetail:CarDetail
  carImage:CarImage
  dataLoaded=false;
  apiUrl="https://localhost:44315/";
  defaultImagePath = 'https://img.piri.net/mnresize/840/-/resim/imagecrop/2018/06/23/03/43/resized_98b07-2dbacae12018audia7sportback.jpg';

  constructor(
    private carDetailService:CarService,
    private carImageService:CarImageService,
    private activatedRoute:ActivatedRoute){}

  ngOnInit():void{
    this.activatedRoute.params.subscribe(params=> {  
      this.getCarById(params["carId"]);
      this.getCarImageByCarId(params["carId"]);
    })
  }
  
  getCarById(carId:number){
    this.carDetailService.getCarDetailById(carId).subscribe(response=>{
     this.carDetail=response.data;
     this.dataLoaded=true
    })
  }
  getCarImageByCarId(carId:number){
    this.carImageService.getAllByCarId(carId).subscribe(response=>{
      this.carImage = response?.data[0];
      this.dataLoaded=true;  
    })
  }
  getImagePath(carImage: CarImage):string {
    let url:string="https://localhost:44315/" + carImage.imagePath
    return  url;
  }
}

