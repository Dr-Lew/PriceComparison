import { Component } from '@angular/core';
import { Database} from "../Database";
import { Product } from '../models/product.model';
import { ShoppingCartComponent } from '../shopping-cart/shopping-cart.component';
import {Router} from "@angular/router";

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
  db = Database;
  cart = ShoppingCartComponent;
  searchQuery: string = "";
  filteredProductsList = Database.getDatabaseofItems(); //Load Products from Database

  constructor(private router: Router){

  }

  selectedCategory: string = 'Select a category';
  
  filterProductsByCategory(): void {
    if (this.selectedCategory === 'Select a category') {
      this.filteredProductsList = Database.getDatabaseofItems();
    } else {
      this.filteredProductsList = Database.getDatabaseofItems().filter(product => product.category === this.selectedCategory);
    }
  }

  // Call this method whenever the category is selected in the dropdown
  onCategorySelected(event: Event): void {
    this.selectedCategory = (event.target as HTMLSelectElement).value;
    this.filterProductsByCategory();
  }

  addToShoppingList(product: Product): void {
    product.quantity++;
     if (!ShoppingCartComponent.shoppingCart.find(p => p.name === product.name)) {
      ShoppingCartComponent.shoppingCart.push(product);
  }
}



  submit() {
    this.filteredProductsList = Database.getDatabaseofItems().filter(product => product.name.toLowerCase().includes(this.searchQuery.toLowerCase()));
  }

  checkout(){
        //Transfer control to the grocery list component
        this.router.navigateByUrl('/shoppingCart');
  }

  back(){
    this.router.navigateByUrl('');
   }

}
