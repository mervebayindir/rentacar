import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Brand } from 'src/app/models/brand';
import { Color } from 'src/app/models/color';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent {

  colors:Color[]=[];
  currentColor:Color;
  dataLoaded=false
  colorfilterText=""
  currentColorId:number=0

  constructor(private colorService:ColorService, 
    private router:Router){}
  
  ngOnInit(): void{
    this.getColors();
  }
  getColors(){
    this.colorService.getColors().subscribe(response=>{
      this.colors =response.data
      this.dataLoaded=true
    })
  }
  setCurrentColor(color:Color){
    this.currentColor =color
  }
  getCurrentColorClass(color:Color){
    if(color==this.currentColor){
      return "list-group-item active"
    }else{
      return "list-group-item"
    }
  }
  getAllColorClass(){
    if(!this.currentColor){
      return "list-group-item active"
    }else{
      return "list-group-item"
    }
  }

/*   filter()
  {
    if(this.currentColorId!=0) this.router.navigate(["cars/color/"+this.currentColorId])
    else this.router.navigate(["/cars"])
  }
 */
}
