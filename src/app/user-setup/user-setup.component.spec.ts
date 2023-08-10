import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSetupComponent } from './user-setup.component';
import { CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { Store } from '../models/store.model';
import { Address } from '../models/address.model';


describe('UserSetupComponent', () => {
  let component: UserSetupComponent;
  let fixture: ComponentFixture<UserSetupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserSetupComponent],
      imports:[FormsModule, ReactiveFormsModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
    fixture = TestBed.createComponent(UserSetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


    it('getListOfStores() should return the correct list of stores', () => {
      let store: Store = new Store(1,new Address("1","1","1","1"),2);
    component.testAddStore(store);
    expect(component.getListofStoresTest()).toEqual([store])
  });

});
