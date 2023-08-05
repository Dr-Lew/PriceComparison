import { Component, OnInit} from '@angular/core';
import { Router } from "@angular/router";
import { GroceryCartService } from '../services/grocery-cart.service';
import { ShoppingCartItem } from "../models/shoppingCartItem";
import { UserSetupComponent } from "../user-setup/user-setup.component";
import { TargetService } from '../services/target.service';


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

  constructor(private router: Router, private cartService: GroceryCartService, private targetService: TargetService) {
    this.totalCartCost = 0;
  }

  ngOnInit() {
    this.cartService.getCheapestPrices(ShoppingCartComponent.shoppingCart, UserSetupComponent.getListOfStores());
    this.cartService.sortShoppingCart(ShoppingCartComponent.shoppingCart);

    for (let item of ShoppingCartComponent.shoppingCart) {
      this.totalCartCost += item.price;
    }
  }

  back(){
    this.router.navigateByUrl('/shoppingList');
  }

  getCart(){
    return ShoppingCartComponent.shoppingCart;
  }

}
