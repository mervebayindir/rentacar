import { CarImage } from "./carImage";

export interface CarDetail{
    carId:number;
    carName:string;
    brandName:string;
    colorName:string;
    dailyPrice:number;
    modelYear:number;
    description:string;
    imagePath:CarImage[];
    findexPoint:number;
}