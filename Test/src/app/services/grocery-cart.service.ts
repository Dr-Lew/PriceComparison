import {Injectable} from '@angular/core';
import {StoreType} from "../models/storeTypes";
import {Store} from '../models/store.model';
import {Address} from "../models/address.model";
import {TargetService} from "./target.service";
import {ShoppingCartItem} from "../models/shoppingCartItem";
import {UserSetupComponent} from '../user-setup/user-setup.component';
import {WalmartService} from "./walmart.service";

@Injectable({
  providedIn: 'root'
})

/**
 * The GroceryCartService provides useful functions for acting upon a cart of products.
 */
export class GroceryCartService {
  // TODO: needs to be updated. Just wanted to move things around.

  constructor(private targetService : TargetService, private walmartService : WalmartService) { }

  async getCheapestPrices(shoppingCart: ShoppingCartItem[], stores: Store[] | null) {
    //Reset cost arrays , just in case. This might not be needed
    if(stores){
      for(let store of stores){
        store.itemCosts = [];
      }
      for (let item of shoppingCart) {
        await this.getCheapestPrice(item, stores);
      }
    }

  }

  async getCheapestPrice(shoppingCartItem : ShoppingCartItem, stores: Store[] | null){
     //Some absurd price
     let min_price: number = 10000;
     let min_store: Store | null = null;

     if (stores) {

       for (let i = 0; i < stores.length; ++i) {
         let curr_store: Store = stores[i];
         let price = 0;
         if (curr_store.storeType == StoreType.Walmart) {
           price = await this.walmartService.getCost(shoppingCartItem.product.walcode);
         } else if (curr_store.storeType == StoreType.Target) {
           price = await this.targetService.getCost(shoppingCartItem.product.upc, curr_store.id.toString());
         } else {
           console.error("Unknown store type - this should never happen");
         }

         curr_store.itemCosts.push(price);
         if (price < min_price && price != -1) {
           min_price = price;
           min_store = curr_store;
         }
       }
     }

     if (min_store != null) {
       shoppingCartItem.price = min_price * shoppingCartItem.quantity;
       shoppingCartItem.store = min_store;
     } else {
       shoppingCartItem.price = -1;
       shoppingCartItem.store = new Store(-1, new Address("Item not found", "",  "", ""), StoreType.Empty);
     }
  }

  /**
   * Sorts the shopping cart by store type then by location.
   *
   * @param shoppingCart
   */
  sortShoppingCart(shoppingCart: ShoppingCartItem[]) {
    shoppingCart.sort(this.compareByStore);
    shoppingCart.sort(this.compareByStoreId);
  }

  private compareByStore(itemA: ShoppingCartItem, itemB: ShoppingCartItem) {
    console.log(itemA.store, itemB.store);
    // @ts-ignore
    return itemA.store.storeType - itemB.store.storeType;
  }

  private compareByStoreId(itemA: ShoppingCartItem, itemB: ShoppingCartItem) {
    // @ts-ignore
    return itemA.store.id - itemB.store.id;
  }

  getCheapestStore(): [Store | null, number] {
    let total: number;
    let cheapestStore: Store | null = null;

    //Some absurd number
    let current_cheapestTotal = 1000000;
    for(let store of UserSetupComponent.getListOfStores()){
      total = 0;
      for(let cost of store.itemCosts){
        total += cost;
      }
      if(cheapestStore != null){
        if(total < current_cheapestTotal){
          current_cheapestTotal = total;
          cheapestStore = store;
        }
      }
      else{
        cheapestStore = store;
      }
    }

    console.log(current_cheapestTotal);
    return [cheapestStore, current_cheapestTotal];

  }
}
