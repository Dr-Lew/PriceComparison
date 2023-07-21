import {Injectable} from '@angular/core';
import {Store} from "../models/store.model";
import {StoreType} from "../models/storeTypes";
import {Address} from "../models/address.model";

@Injectable({
  providedIn: 'root'
})

/**
 * The WalmartService class provides functions to invoke the Walmart API.
 */
export class WalmartService {

  constructor() { }

  getStores(zipcode: string) {
    let stores: Store[] = [new Store(123, new Address('','','','68136'), StoreType.Walmart)];
    return stores;
  }
}
