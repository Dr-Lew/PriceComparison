import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSetupComponent } from './user-setup.component';
import { CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


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

 //// it('should create', () => {
  //  expect(component).toBeTruthy();
 // });

});
