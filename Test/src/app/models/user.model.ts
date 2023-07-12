import {Store} from "./store.model";
import {Item} from "./item.model";

export class User {
  stores: Store[] = [];
  groceryList: Item[] = [];

  constructor(stores: Store[]) {
    this.stores = stores;
  }
  addStore(store: Store) {
    this.stores.push(store);
  }
}
