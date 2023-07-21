import {Component, forwardRef} from '@angular/core';
import {FormBuilder, FormControl, Validators, NG_VALUE_ACCESSOR} from '@angular/forms';

import {User} from "../models/user.model";
import {TargetService} from "../services/target.service";
import {Store} from "../models/store.model";
import {WalmartService} from "../services/walmart.service";
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

/**
 * The UserSetupComponent represents the first and necessary step before a user can begin shopping.
 * This component ultimately retrieves the stores the user shops at. This is done through the following steps:
 *  1) Gets a zipcode from the user.
 *  2) Gets the stores they shop at.
 *  3) Displays the store locations to the user.
 *  4) Gets the store locations the user shops at.
 */
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
              private walmartService: WalmartService, private router: Router) {
  }

  /**
   * The getStores() function uses the values in the zipcode and the selectedStores variables to retrieve the
   * store locations.
   */
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

  /**
   * The submit() method sets up a new user object with their store preferences and transfers control to the
   * ShoppingListComponent.
   */
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
}
