import { TestBed } from '@angular/core/testing';
import { Address } from '../models/address.model';
import { Store } from '../models/store.model';

import { WalmartService } from './walmart.service';

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
    console.log("Not Implemented");
  });
});
