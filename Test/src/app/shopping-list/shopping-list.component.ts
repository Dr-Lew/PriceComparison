import { Component } from '@angular/core';
import { Database} from "../Database";
import { Product } from '../models/product.model';
import { ShoppingCartComponent } from '../shopping-cart/shopping-cart.component';
import {Router} from "@angular/router";
import {ShoppingCartItem} from "../models/shoppingCartItem";
import {GroceryCartService} from "../services/grocery-cart.service";
import {UserSetupComponent} from "../user-setup/user-setup.component";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})

/**
 * The ShoppingListComponent represents the grocery shopping page of the application. It is responsible for
 * displaying the set of products in the database and adding products to the user's shopping cart.
 */
export class ShoppingListComponent {
  db =  new Database;
  cart = ShoppingCartComponent;
  searchQuery: string = "";
  filteredProductsList = this.db.getDatabaseofItems(); //Load Products from Database

  constructor(private router: Router, private cartService: GroceryCartService){
    this.db.loadCSV();
  }

  addToShoppingList(product: Product): void {
    let result = ShoppingCartComponent.shoppingCart.find(p => p.product.name === product.name);
    if (!result) {
     let shoppingCartItem : ShoppingCartItem = new ShoppingCartItem(product);
     ShoppingCartComponent.shoppingCart.push(shoppingCartItem);
    } else {
      result.quantity++;
    }
  }

  submit() {
    this.filteredProductsList = this.db.getDatabaseofItems().filter(product => product.name.toLowerCase().includes(this.searchQuery.toLowerCase()));
  }

  checkout(){
    //Transfer control to the grocery list component
    this.router.navigateByUrl('/shoppingCart');
  }

  back(){
    this.router.navigateByUrl('');
  }

}
