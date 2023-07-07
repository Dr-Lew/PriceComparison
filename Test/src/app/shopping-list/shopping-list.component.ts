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
  products: Product[] = [
    { name: 'Product 1', count: 0 },
    { name: 'Product 2', count: 0 },
    { name: 'Product 3', count: 0 },
    { name: 'Product 4', count: 0 },
    { name: 'Product 5', count: 0 }
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
}
