import {Store} from "./store.model";

/**
 * The product class models a product. The two properties that are needed are the name and upc upon initialization.
 * The product class also consists of a price, quantity, and store that can be changed throughout the lifetime of
 * the product.
 */
export class Product {
  name:     string;
  upc:      string;
  price:    number;
  quantity: number;
  store:    Store | null;

  constructor(name: string, upc: string) {
    this.name = name;
    this.upc = upc;
    this.price = 0;
    this.quantity = 0;
    this.store = null;
  }

  setPrice(price: number) {
    this.price = price;
  }

  setStore(store: Store) {
    this.store = store;
  }

  /**
   * The increaseQuantity() method increases the quantity of the product by one.
   */
  increaseQuantity() {
    this.quantity++;
  }

  /**
   * The decreaseQuantity() method decreases the quantity of the product by one.
   */
  decreaseQuantity() {
    this.quantity--;
  }
}