import {Address} from "./address.model";
import {StoreType} from "./storeTypes";

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
