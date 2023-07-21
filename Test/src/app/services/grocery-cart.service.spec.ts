import { TestBed } from '@angular/core/testing';

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
});
