import { Injectable } from '@angular/core';
import { Car } from '../models/car';
import { CarDetail } from '../models/carDetail';
import { CartItem } from '../models/cartItem';
import { CartItems } from '../models/cartItems';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  addToCart(car:Car){
    let item = CartItems.find(c=>car.carId===car.carId);
    if (item) {
      item.quantity+=1;
    }else{
      let cartItem= new CartItem();
      cartItem.car=car;
      cartItem.quantity=1;
      CartItems.push(cartItem)
    }
  }
  removeFromCart(car:CarDetail){
    let item:any=CartItems.find(c=>car.carId===car.carId);
    CartItems.splice(CartItems.indexOf(item),1);
  }
  list():CartItem[]{
    return CartItems;
  }
}
