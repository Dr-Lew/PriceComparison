import { Injectable } from '@angular/core';

import {StoreType} from "../models/storeTypes";
import {Product} from '../models/product.model';
import {Address} from "../models/address.model";
import {TargetService} from "./target.service";

@Injectable({
  providedIn: 'root'
})

/**
 * The GroceryCartService provides useful functions for acting upon a cart of products.
 */
export class GroceryCartService {
  // TODO: needs to be updated. Just wanted to move things around.

  constructor() { }

  /*
  getCheapestPrices(){
    for(let i = 0; i < this.items.length;i++){
      this.getCheapestPrice(this.items[i])
    }
  }
   */

  async getCheapestPrice(product : Product) {
    // let targetService = new TargetService();
    // let stores = this.storeLocationsCtrl.value;
    //
    // //Some absurd price
    // let min_price: number = 10000;
    // let min_store: Store = new Store(-1, new Address('','','',''), StoreType.Walmart);
    //
    // if (stores) {
    //   for (let i = 0; i < stores.length; ++i) {
    //     let curr_store: Store = stores[i];
    //     let curr_price = await targetService.getCost(product.upc, curr_store.id.toString());
    //     if (curr_price < min_price) {
    //       min_price = curr_price;
    //       min_store = curr_store;
    //     }
    //   }
    // }
    // console.log("Cheapest Place to find " + product.name)
    // console.log("Store: " + min_store.id);
    // console.log("Item: " + min_price);
  }
}
