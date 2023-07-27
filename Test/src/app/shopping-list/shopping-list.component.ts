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
  db =  new Database;
  cart = ShoppingCartComponent;
  searchQuery: string = "";
  filteredProductsList = this.db.getDatabaseofItems(); //Load Products from Database

  selectedCategory: string = '';

  filterProductsByCategory(): void {
    if (this.selectedCategory === 'Select a category') {
      this.filteredProductsList = this.db.getAllProducts();
    } else {
      this.filteredProductsList = this.db.getProductsByCategory(this.selectedCategory);
    }
  }

  // Call this method whenever the category is selected in the dropdown
  onCategorySelected(category: string): void {
    this.selectedCategory = category;
    this.filterProductsByCategory();
  }
  
  constructor(private router: Router){
    this.db.loadCSV();

  }

  addToShoppingList(product: Product): void {
    product.quantity++;
     if (!ShoppingCartComponent.shoppingCart.find(p => p.name === product.name)) {
      ShoppingCartComponent.shoppingCart.push(product);
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
