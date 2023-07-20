import {Store} from "./store.model";
import {Product} from "./product.model";

export class User {
  stores: Store[] = [];
  groceryCart: Product[] = [];

  constructor(stores: Store[]) {
    this.stores = stores;
  }
  addStore(store: Store) {
    this.stores.push(store);
  }

  addProductToCart(product: Product) {
    this.groceryCart.push(product);
  }
}
