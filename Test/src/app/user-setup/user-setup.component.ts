import {Component, forwardRef} from '@angular/core';
import {FormBuilder, FormControl, Validators, NG_VALUE_ACCESSOR} from '@angular/forms';

import {User} from "../models/user.model";
import {TargetService} from "../services/target.service";
import {Store} from "../models/store.model";
import {StoreType} from "../models/storeTypes";
import {Item} from '../models/item.model';
import {Address} from "../models/address.model";
import {WalmartService} from "../services/walmart.service";
import { Database } from 'src/assets/Database';
import {Router} from "@angular/router";

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
  user: User | null = null;

  zipcodeCtrl:        FormControl<string | null>   = new FormControl('', Validators.required);
  storesCtrl:         FormControl<string[] | null> = new FormControl([], Validators.required);
  storeLocationsCtrl: FormControl<Store[] | null>  = new FormControl([], Validators.required);

  zipcodeFormGroup      = this.formBuilder.group({
    zipcodeCtrl: this.zipcodeCtrl
  });
  storesFormGroup        = this.formBuilder.group({
    storesCtrl: this.storesCtrl
  });
  storeLocationsFormGroup = this.formBuilder.group({
    storeLocationsCtrl: this.storeLocationsCtrl
  });

  supportedStoreTypes = ['Walmart', 'Target'];
  storeLocations: Store[] = [];
  items: Item[] = [];

  constructor(private formBuilder: FormBuilder, private targetService: TargetService,
              private walmartService: WalmartService, private router: Router) {
    const db = new Database;
    this.items = db.getDatabaseofItems();
  }

  async getStores() {
    let zipcode = this.zipcodeFormGroup.controls.zipcodeCtrl.getRawValue();
    let selectedStores = this.storesFormGroup.controls.storesCtrl.value;

    if (selectedStores != null && zipcode != null) {
      for (let i = 0; i < selectedStores.length; i++) {
        if(selectedStores[i] === 'Walmart') {
          this.storeLocations = this.storeLocations.concat(this.walmartService.getStores(zipcode));
        } else if (selectedStores[i] === 'Target') {
          this.storeLocations = this.storeLocations.concat(await this.targetService.getStores(zipcode));
        }
      }
    }

    for (let s of this.storeLocations) {
      console.log(s.id);
    }
  }

  submit() {
    let stores: Store[] | null = this.storeLocationsCtrl.value;
    if (stores != null) { // Should always be true
      this.user = new User(stores);
    } else {
      console.log('UserSetupComponent.submit(): Stores is null. This should never happen.')
    }
    //Transfer control to the grocery list component
    this.router.navigateByUrl('/shoppingList');
  }

  getCheapestPrices(){
    for(let i = 0; i < this.items.length;i++){
      this.getCheapestPrice(this.items[i])
    }
  }

  async getCheapestPrice(item : Item) {
    let targetService = new TargetService();
    let stores = this.storeLocationsCtrl.value;

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
