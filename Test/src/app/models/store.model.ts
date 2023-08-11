import {Address} from "./address.model";
import {StoreType} from "./storeTypes";

/**
 * The Store class models a store which consists of an id, address, and store type.
 */
export class Store {
  id: number;
  address: Address;
  storeType: StoreType;
  itemCosts: number[]

  constructor(id: number, address: Address, storeType: StoreType) {
    this.id = id;
    this.address = address;
    this.storeType = storeType;
    this.itemCosts = [];
  }

  toString() {
    if (this.storeType == StoreType.Walmart) {
      return "Walmart - " + this.address.street;
    } else if (this.storeType == StoreType.Target) {
      return "Target  - " + this.address.street;
    } else {
      return this.address.street;
    }
  }
}
