import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatPaginator } from '@angular/material/paginator';
import { ShoppingListComponent } from './shopping-list.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatFormField} from '@angular/material/form-field';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MAT_SELECT_SCROLL_STRATEGY_PROVIDER, MatSelect } from '@angular/material/select';
import { MatLabel } from '@angular/material/form-field';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {DropdownComponent} from '../dropdown/dropdown.component';
import { MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY_PROVIDER } from '@angular/material/tooltip';
import { MatOption } from '@angular/material/core';
import {CdkOverlayOrigin,OverlayModule} from '@angular/cdk/overlay';
import {CdkConnectedOverlay} from '@angular/cdk/overlay'
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatRippleModule } from '@angular/material/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ShoppingCartComponent } from '../shopping-cart/shopping-cart.component';
import { Database } from '../Database';
import { Product } from '../models/product.model';
import { ShoppingCartItem } from '../models/shoppingCartItem';
describe('ShoppingListComponent', () => {
  let component: ShoppingListComponent;
  let fixture: ComponentFixture<ShoppingListComponent>;
  let cartComponent: ShoppingCartComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShoppingListComponent,MatSelect,MatPaginator,DropdownComponent,MatFormField,MatLabel,MatOption],
      imports: [MatPaginatorModule,OverlayModule,BrowserAnimationsModule,MatFormFieldModule,MatRippleModule,MatGridListModule,FormsModule,ReactiveFormsModule,CdkOverlayOrigin,CdkConnectedOverlay],
      providers:[MAT_SELECT_SCROLL_STRATEGY_PROVIDER,MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY_PROVIDER,ShoppingCartComponent]
    });
    fixture = TestBed.createComponent(ShoppingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('filterProductsByCategory() Should properly filter products', () => {
    let testProducts: Product[] = [new Product("dairy","Lactaid Lactose Free 2% Reduced Fat Milk","041383090103","10801608","/assets/Lactaid-image-placeholder.jpg"),
  new Product("dairy","Sargento Mozzarella String Cheese","046100007150","10291588","/assets/Sargento-image-placeholder.jpg"),
  new Product("dairy","Stonyfield Organic Plain Greek Yogurt","052159532505","39670537","/assets/Yogurt-image-placeholder.jpg"),
  new Product("dairy","Daisy Pure & Natural Sour Cream - 8oz","073420000066","10309448","/assets/daisy-image-placeholder.jpg"),
  new Product("dairy","Eggland's Best Grade A Large Eggs","715141503494","10324125","/assets/Eggs-image-placeholder.jpg")]
  for(let prod of testProducts){
    component.db.testAddProduct(prod);
  }
  component.db.testAddProduct(new Product("snacks","Chips Ahoy! Original Chocolate Chip","044000032197","17176252","/assets/ChipsAhoy-image-placeholder.jpg"));
  component.selectedCategory = "dairy";
  let products: Product[] = component.db.getDatabaseofItems();
  component.filterProductsByCategory();
  expect(testProducts).toEqual(component.filteredProductsList);
  });
  it('addToShoppingList() should properly add items to the cart and removeItemsWithZeroQuanitity() should remove if quantity =0', () => {
    let testProduct: Product = new Product("dairy","Lactaid Lactose Free 2% Reduced Fat Milk","041383090103","10801608","/assets/Lactaid-image-placeholder.jpg");
    let testCartProduct: ShoppingCartItem = new ShoppingCartItem(testProduct);
    //Add test product and check it was added correctly
    component.addToShoppingList(testProduct);
    expect(ShoppingCartComponent.shoppingCart[0]).toEqual(testCartProduct);
    //Add another product and check that the quantity increased
    component.addToShoppingList(testProduct);
    expect(ShoppingCartComponent.shoppingCart[0].quantity).toEqual(2);
    //Simulate removing an item from the cart and check that it gets removed
    ShoppingCartComponent.shoppingCart[0].quantity = 0;
    component.removeItemsWithZeroQuantity();
    expect(ShoppingCartComponent.shoppingCart.length).toEqual(0);
  });

});
