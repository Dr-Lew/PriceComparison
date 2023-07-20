import {Store} from "./store.model";

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

  increaseQuantity() {
    this.quantity++;
  }

  decreaseQuantity() {
    this.quantity--;
  }
}
