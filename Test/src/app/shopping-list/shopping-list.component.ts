import { Component, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
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
  
  // Pagination properties
  currentPage = 0;
  pageSize = 5; // Default to 5 items per page
  pageSizeOptions = [5, 10, 20];
  selectedPageSize = 5;

  selectedCategory: string = '';
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  // Property to hold the paged products list
  pagedProductsList: Product[] = [];

  filterProductsByCategory(): void {
    if (this.selectedCategory === 'Select a category') {
      this.filteredProductsList = this.db.getAllProducts();
    } else {
      this.filteredProductsList = this.db.getProductsByCategory(this.selectedCategory);
    }
  }

  // Call this method whenever the category is selected in the dropdown
  onCategorySelected(category: string): void {
    this.currentPage = 0;
    this.selectedCategory = category;
    this.paginator.firstPage();
    this.filterProductsByCategory();
  }
  
  constructor(private router: Router){
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

  updatePagedProductsList() {
    const startIndex = this.currentPage * this.pageSize;
    this.pagedProductsList = this.filteredProductsList.slice(startIndex, startIndex + this.pageSize);
  }

  // Handle the page change event
  onPageChange(event: PageEvent) {
    this.currentPage = event.pageIndex;
  }

  options: string[] = ['Select a category', 'beverage', 'bakery', 'pantry', 'candies', 'dairy', 'pets', 'snacks', 'baby'];
  
  // Handle the pagination size change
  onPageSizeChange(pageSize: string): void {
    this.pageSize = Number(pageSize);
    this.currentPage = 0; // Reset to the first page when changing the pagination size
    this.paginator.firstPage();
    this.updatePagedProductsList();
  }
     
  ngOnInit() {
    // Initialize the category dropdown selection with the default value
    this.selectedCategory = this.options[0];
  }
}
