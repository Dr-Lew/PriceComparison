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

  async getCost(walmartItemId: string) {
    //Only supports Omaha

    const zipCode = "68136";
    const response = await fetch('https://api.bluecartapi.com/request?api_key=225349E7A2384404B58BE3CF9159145E&type=product&item_id=' + walmartItemId + '&customer_zipcode=' + zipCode);
    //const data = await response.json();
    const data = await response.text();
    const obj = JSON.parse(data);

    let price = obj.product.buybox_winner.price;
    return price;
  }

  //Only supports stores in Omaha - 68136
  getStores(zipcode: string) {
    if (!(zipcode === "68136"))
      return null;

    let stores: Store[] = [new Store(3153, new Address('6710 S 167th St','Omaha','NE','68136'), StoreType.Walmart)];
    return stores;
  }
}
