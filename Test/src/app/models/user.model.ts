import {Store} from "./store.model";
import {Item} from "./item.model";

export class User {
  stores: Store[] = [];
  groceryList: Item[] = [];

  addStore(store: Store) {
    this.stores.push(store);
  }
}
