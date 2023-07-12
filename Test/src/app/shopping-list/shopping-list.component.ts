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
    const matchingProduct = this.products.find(product => product.name.toLowerCase().includes(this.searchQuery.toLowerCase()));
    this.products = matchingProduct ? [matchingProduct] : [];
  }
  
}
