import { Component } from '@angular/core';
import { faLiraSign } from '@fortawesome/free-solid-svg-icons';
import {library} from '@fortawesome/fontawesome-svg-core';
import { Car } from 'src/app/models/car';
library.add(faLiraSign);

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent {

  cars:Car[]=[];
  faLira = faLiraSign;
  constructor(){}

  ngOnInit():void{
    
  }
}
