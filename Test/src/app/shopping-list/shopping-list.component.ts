import { Component } from '@angular/core';

interface Product {
  name: string;
  count: number;
}

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent {
  searchQuery: string = "";
  products: Product[] = [
    { name: 'cocacola', count: 0 },
    { name: 'doritoes', count: 0 },
    { name: 'jif', count: 0 },
    { name: 'lays', count: 0 },
    { name: 'bread', count: 0 }
  ];
  shoppingList: Product[] = [];
  filteredProductsList = this.products; // Set the filtered products = to all of the products.

  addToShoppingList(product: Product): void {
    const existingProduct = this.shoppingList.find(p => p.name === product.name);
    if (existingProduct) {
      existingProduct.count++;
    } else {
      const newProduct: Product = { ...product, count: 1 };
      this.shoppingList.push(newProduct);
    }
  }

  submit() {
    //console.log(this.searchQuery);
    if (this.searchQuery) { // If a search term was entered, set filtered products to the matching products found.
      const matchingProduct = this.products.find(product => product.name.toLowerCase().includes(this.searchQuery.toLowerCase()));
      this.filteredProductsList = matchingProduct ? [matchingProduct] : [];
    } else { // If no search term was entered and it was blank, then set the filtered products = this.products which is all of them.
      this.filteredProductsList = this.products;
    }
  }
  
}
