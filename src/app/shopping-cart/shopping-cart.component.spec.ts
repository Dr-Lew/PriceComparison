import { ComponentFixture, TestBed } from '@angular/core/testing';

import {MatToolbarModule} from "@angular/material/toolbar";
import { ShoppingCartComponent } from './shopping-cart.component';
import { Product } from '../models/product.model';
import { ShoppingCartItem } from '../models/shoppingCartItem';

describe('ShoppingCartComponent', () => {
  let component: ShoppingCartComponent;
  let fixture: ComponentFixture<ShoppingCartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShoppingCartComponent],
      imports: [MatToolbarModule]
    });
    fixture = TestBed.createComponent(ShoppingCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('getCart() should return properly', () => {
    expect(component.getCart().length).toEqual(0);
    let testProduct: Product = new Product("dairy","Lactaid Lactose Free 2% Reduced Fat Milk","041383090103","10801608","/assets/Lactaid-image-placeholder.jpg");
    ShoppingCartComponent.shoppingCart.push(new ShoppingCartItem(testProduct));
    expect(component.getCart()).toEqual([new ShoppingCartItem(testProduct)]);
  });
});
