import {Injectable} from '@angular/core';
import {Store} from "../models/store.model";
import {Address} from "../models/address.model";
import {StoreType} from "../models/storeTypes";

@Injectable({
  providedIn: 'root'
})

/**
 * The TargetService class provides functions for interacting with the Target API.
 */
export class TargetService {

  constructor() {
    console.log("Target Service: constructor() invoked");
  }

  keys: String[] = [
    'dde251992cmsh9374cc7b94588c3p16acf0jsn97d7bc574f02',
    '6b438322b0msh20f525a4f78f285p192ec0jsn260d72d28382'
  ]

  /**
   * The getStores() function takes a zip code and returns a list of stores near that zip code.
   *
   * @param zipCode the zip code to use to find stores nearby.
   */
  async getStores(zipCode: string)  {
    console.log('Target Service: getStores() invoked');

    let stores: Store[] = [];

    const url = 'https://target1.p.rapidapi.com/stores/list?zipcode=' + zipCode;
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'dde251992cmsh9374cc7b94588c3p16acf0jsn97d7bc574f02',
        'X-RapidAPI-Host': 'target1.p.rapidapi.com'
      }
    };

    try {
      const response = await fetch(url, options);
      const result = await response.text();
      const obj = JSON.parse(result);

      const locations = obj[0].locations;
      for (let i = 0; i < locations.length; i++) {
        let location = locations[i];
        let tmp_address = location.address;

        let address: Address = new Address(tmp_address.address_line1, tmp_address.city, tmp_address.state,
                                           tmp_address.postal_code);
        stores[i] = new Store(location.location_id, address, StoreType.Target);
      }
    } catch (error) {
      console.error(error);
    }


    console.log(stores);
    return stores;
  }

  /**
   * The getCost method gets the cost of an item from a store. Returns -1 upon failure.
   *
   * @param upc the upc of the item.
   * @param storeId the store to search the price of the item.
   */
  async getCost(upc: string, storeId: string) {
    const url = 'https://target1.p.rapidapi.com/products/search-by-barcode?store_id=' + storeId + '&barcode=' + upc;
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'dde251992cmsh9374cc7b94588c3p16acf0jsn97d7bc574f02',
        'X-RapidAPI-Host': 'target1.p.rapidapi.com'
      }
    };

    let price = 0;

    try {
      const response = await fetch(url, options);
      const product_details = await response.text();
      const obj = JSON.parse(product_details);
      price = obj.data.product_by_barcode.price.current_retail;

    } catch (error) {
      console.error(error);
      return -1;
    }

    return price;
  }
}
