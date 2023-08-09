import { TestBed } from '@angular/core/testing';
import { Address } from '../models/address.model';
import { Product } from '../models/product.model';
import { ShoppingCartItem } from '../models/shoppingCartItem';
import { Store } from '../models/store.model';

import { GroceryCartService } from './grocery-cart.service';

describe('GroceryCartService', () => {
  let service: GroceryCartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GroceryCartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getCheapestPrice() should return the correct price', async () => {
    const testProduct = new Product("beverage","Coca Cola 12Pk","049000028904","12166733","/assets/cocacola-image-placeholder.jpg");
    let testShoppingItem = new ShoppingCartItem(testProduct);
    const testStoreAddress = new Address('4001 N 132nd St',"Omaha","Nebraska","68164-1839");
    const testStore = new Store(530,testStoreAddress,2);
    const testStore2 = new Store(2010,{city:"Omaha",state:"Nebraska",zip:"68122-1803",street:"6636 N 73rd Plz"},2);
    let testStores = [testStore,testStore2];
    await service.getCheapestPrice(testShoppingItem,testStores)
    expect(testShoppingItem.price).toEqual(7.49);
  });
});
