import { TestBed } from '@angular/core/testing';
import { Address } from '../models/address.model';
import { Store } from '../models/store.model';

import { WalmartService } from './walmart.service';
import { StoreType } from '../models/storeTypes';

describe('WalmartService', () => {
  let service: WalmartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WalmartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getStores() should return accurate information', async () => {
    let testStore = new Store(3153, new Address('6710 S 167th St','Omaha','NE','68136'), StoreType.Walmart);
    expect(service.getStores("68136")).toEqual([testStore]);
  });
  it('getCost() should return accurate information', async () => {
    let testItemId = "12166733";
    let testItemPrice = 4.99;
    let getCostReturnPrice = await service.getCost(testItemId);
    expect(testItemPrice).toBeCloseTo(getCostReturnPrice);

  },100000);
});
