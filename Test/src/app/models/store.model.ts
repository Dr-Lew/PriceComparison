import {Address} from "./address.model";
import {StoreType} from "./storeTypes";

/**
 * The Store class models a store which consists of an id, address, and store type.
 */
export class Store {
  id: number;
  address: Address;
  storeType: StoreType;

  constructor(id: number, address: Address, storeType: StoreType) {
    this.id = id;
    this.address = address;
    this.storeType = storeType;
  }
}
