import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingListComponent } from './shopping-list.component';
import { MatGridListModule } from '@angular/material/grid-list';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {DropdownComponent} from '../dropdown/dropdown.component';

describe('ShoppingListComponent', () => {
  let component: ShoppingListComponent;
  let fixture: ComponentFixture<ShoppingListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShoppingListComponent,DropdownComponent],
      imports: [MatGridListModule,FormsModule,ReactiveFormsModule]
    });
    fixture = TestBed.createComponent(ShoppingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

 // it('should create', () => {
  //  expect(component).toBeTruthy();
 // });

});
