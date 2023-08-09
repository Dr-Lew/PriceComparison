import { TestBed } from '@angular/core/testing';
import { Store } from '../models/store.model';
import { TargetService } from './target.service';
import { StoreType} from '../models/storeTypes';
import { Address } from '../models/address.model';

describe('TargetService', () => {
  let service: TargetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TargetService);
    
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getStores() should return accurate stores', async () => {
    const testZip = "68008";
    const testStoreAddress = new Address('4001 N 132nd St',"Omaha","Nebraska","68164-1839");
    const testStore = new Store(530,testStoreAddress,2);
    const storesInTestZip = 9;
    const expectedId = 530;
    const testStores = await service.getStores(testZip);
    expect(testStores.length).toEqual(9);
    expect(testStores).toContain(testStore);
  });


});
