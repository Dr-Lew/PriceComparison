import { Component, OnInit} from '@angular/core';
import { Router } from "@angular/router";
import { GroceryCartService } from '../services/grocery-cart.service';
import { ShoppingCartItem } from "../models/shoppingCartItem";
import { UserSetupComponent } from "../user-setup/user-setup.component";
import { TargetService } from '../services/target.service';
import {StoreType} from "../models/storeTypes";
import {Store} from "../models/store.model";


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
  static shoppingCart: ShoppingCartItem[] = [];
  totalCartCost : number;
  cheapest: [null | Store, number];

  constructor(private router: Router, private cartService: GroceryCartService, private targetService: TargetService) {
    this.totalCartCost = 0;
    this.cheapest = [null, 0];
  }

  ngOnInit() {

  }

  back(){
    this.router.navigateByUrl('/shoppingList');
  }

  async run(){
    await this.cartService.getCheapestPrices(ShoppingCartComponent.shoppingCart, UserSetupComponent.getListOfStores());

    let cheapest  = this.cartService.getCheapestStore();
    this.cheapest[0] = cheapest[0];
    this.cheapest[1] = Math.round(cheapest[1] * 100) / 100;

    for (let item of ShoppingCartComponent.shoppingCart) {
      this.totalCartCost += item.price;
    }
    this.totalCartCost = Math.round(this.totalCartCost * 100) / 100;

  }
  getCart(){
    return ShoppingCartComponent.shoppingCart;
  }

  protected readonly StoreType = StoreType;
}
