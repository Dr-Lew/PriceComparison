import {Component,forwardRef} from '@angular/core';
import {FormControl,NG_VALUE_ACCESSOR} from '@angular/forms';
import {User} from "../models/user.model";
import {TargetService} from "../services/target.service";
import {Store} from "../models/store.model";
import {StoreType} from "../models/storeTypes";
import { Item } from '../models/item.model';
import {Address} from "../models/address.model";
import { Database } from 'src/assets/Database';


@Component({
  selector: 'app-user-setup',
  templateUrl: './user-setup.component.html',
  styleUrls: ['./user-setup.component.css'],
  providers: [
     { provide: NG_VALUE_ACCESSOR,
       useExisting: forwardRef(() => UserSetupComponent),
        multi: true } ]
})
export class UserSetupComponent {
  user: User;
  dropdownMenuStores: Store[] = [];
  selectedStores = new FormControl([]);
  zipcode: string = "";
  items: Item[] = [];

  constructor() {
    this.user = new User();
    const db = new Database;
    this.items = db.getDatabaseofItems();
  }
  async getStores() {
    let targetService = new TargetService();
    this.dropdownMenuStores = await targetService.getStores(this.zipcode);

    for (let s of this.dropdownMenuStores) {
      console.log(s.id);
    }
  }

  getCheapestPrices(){
    for(let i = 0; i < this.items.length;i++){
      this.getCheapestPrice(this.items[i])
    }

  }

  async getCheapestPrice(item : Item) {
    let targetService = new TargetService();
    let stores = this.selectedStores.getRawValue();

    //Some absurd price
    let min_price: number = 10000;
    let min_store: Store = new Store(-1, new Address('','','',''), StoreType.Walmart);

    if (stores) {
      for (let i = 0; i < stores.length; ++i) {
        let curr_store: Store = stores[i];
        let curr_price = await targetService.getCost(item.upc, curr_store.id.toString());
        if (curr_price < min_price) {
          min_price = curr_price;
          min_store = curr_store;
        }
      }
    }
    console.log("Cheapest Place to find " + item.name)
    console.log("Store: " + min_store.id);
    console.log("Item: " + min_price);
  }
}
