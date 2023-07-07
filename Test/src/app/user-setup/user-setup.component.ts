import {Component} from '@angular/core';
import {FormControl} from '@angular/forms';

import {User} from "../models/user.model";
import {TargetService} from "../services/target.service";
import {Store} from "../models/store.model";
import {StoreType} from "../models/storeTypes";
import {Address} from "../models/address.model";

@Component({
  selector: 'app-user-setup',
  templateUrl: './user-setup.component.html',
  styleUrls: ['./user-setup.component.css'],
})

export class UserSetupComponent {
  user: User;

  zipcodeControl  = new FormControl('');
  supportedStoreTypes = ['Walmart', 'Target'];

  selectedStoreTypes= new FormControl([]);
  dropdownMenuStores: Store[] = [];
  selectedStores = new FormControl([]);


  constructor() {
    this.user = new User();
  }
  async getStores() {
    let targetService = new TargetService();
    let zipcode = this.zipcodeControl.getRawValue();
    console.log(zipcode);
    // if (zipcode != null) {
    //   this.dropdownMenuStores = await targetService.getStores(zipcode);
    // }
    // for (let s of this.dropdownMenuStores) {
    //   console.log(s.id);
    // }
  }


  // async getCheapestPrice() {
  //   let targetService = new TargetService();
  //   let test_product_upc = '049000028904';
  //   let stores = this.selectedStores.getRawValue();
  //
  //   //Some absurd price
  //   let min_price: number = 10000;
  //   let min_store: Store = new Store(-1, new Address('','','',''), StoreType.Walmart);
  //
  //   if (stores) {
  //     for (let i = 0; i < stores.length; ++i) {
  //       let curr_store: Store = stores[i];
  //       let curr_price = await targetService.getCost(test_product_upc, curr_store.id.toString());
  //       if (curr_price < min_price) {
  //         min_price = curr_price;
  //         min_store = curr_store;
  //       }
  //     }
  //   }
  //
  //   console.log(min_store.id);
  //   console.log(min_price);
  // }
}
