import {Product} from "./product.model";
import {Store} from "./store.model";

export class ShoppingCartItem {
  product : Product;
  quantity: number;
  store: Store | null;
  price: number;

  constructor(product: Product) {
    this.product = product;
    this.quantity = 1;
    this.store = null;
    this.price = 0;
  }
}
