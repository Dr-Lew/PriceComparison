import { Component } from '@angular/core';
import { Product } from '../models/product.model';
import {Router} from "@angular/router";
import { GroceryCartService } from '../services/grocery-cart.service';


@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})

/**
 * The ShoppingCartComponent class represents the shopping cart page of our application. It is responsible for
 * displaying the contents of the user's shopping cart to the user, and making changes to their shopping if
 * the user needs to.
 */
export class ShoppingCartComponent {
 static shoppingCart: Product[] = [];
 tempPriceList: String;
 constructor(private router: Router, private cartService: GroceryCartService){
  this.tempPriceList = "";

 }


 back(){
  this.router.navigateByUrl('/shoppingList');
 }

 getCart(){
  return ShoppingCartComponent.shoppingCart;
 }

 async findCheapestForEntireCart(){
  let temp: string = "";
  for(let item of ShoppingCartComponent.shoppingCart){
    temp = await this.cartService.getCheapestPrice(item);
    this.tempPriceList = this.tempPriceList + temp;
  }
  console.log(this.tempPriceList);

 }
}
