import {Store} from "./store.model";

/**
 * The product class models a product. The two properties that are needed are the name and upc upon initialization.
 * The product class also consists of a price, quantity, and store that can be changed throughout the lifetime of
 * the product.
 */
export class Product {
  cat:      string;
  name:     string;
  upc:      string;
  image:    string;

  constructor(cat: string,name: string, upc: string,image: string) {
    this.cat = cat;
    this.name = name;
    this.upc = upc;
    this.image = image;
  }
}
