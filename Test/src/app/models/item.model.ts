import {Store} from "./store.model";

export class Item {
  name: string;
  upc: number;
  price: number;
  store: Store;

  constructor(name: string, upc: number, price: number, store: Store) {
    this.name = name;
    this.upc = upc;
    this.price = price;
    this.store = store;
  }

}
