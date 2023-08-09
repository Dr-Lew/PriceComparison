import {Store} from "./store.model";
import {Product} from "./product.model";

/**
 * The user class models a user. A user consists of a set of stores they shop at and a grocery cart of products.
 */
export class User {
  stores: Store[] = [];         // The set of stores the user shops at
  groceryCart: Product[] = [];  // The user's grocery cart of products

  constructor(stores: Store[]) {
    this.stores = stores;
  }

  /**
   * The addStore method adds a store to the user's stores they shop at.
   *
   * @param store the store to be added to the user's stores.
   */
  addStore(store: Store) {
    this.stores.push(store);
  }

  /**
   * The addProductToCart method add a product to the user's grocery cart.
   *
   * @param product the product to be added to the user's grocery cart.
   */
  addProductToCart(product: Product) {
    this.groceryCart.push(product);
  }
}
