import {Component} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

import {User} from "../models/user.model";
import {TargetService} from "../services/target.service";
import {Store} from "../models/store.model";
import {StoreType} from "../models/storeTypes";
import {Address} from "../models/address.model";
import {WalmartService} from "../services/walmart.service";

@Component({
  selector: 'app-user-setup',
  templateUrl: './user-setup.component.html',
  styleUrls: ['./user-setup.component.css'],
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


  constructor(private formBuilder: FormBuilder, private targetService: TargetService,
              private walmartService: WalmartService) {
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

  submit() {
    let stores: Store[] | null = this.storeLocationsCtrl.value;
    if (stores != null) { // Should always be true
      this.user = new User(stores);
    } else {
      console.log('UserSetupComponent.submit(): Stores is null. This should never happen.')
    }

    //Transfer Control to the grocery list component
  }
}
