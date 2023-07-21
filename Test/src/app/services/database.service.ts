import { Injectable } from '@angular/core';
import {Product} from "../models/product.model";

@Injectable({
  providedIn: 'root'
})

/**
 * The DatabaseService class provided functions for invoking the database behind the price comparison application.
 */
export class DatabaseService {

  prodDb: Product[] = [];
  constructor(){
    this.prodDb.push(new Product("Coca-Cola 12Pk","049000028904"));
    this.prodDb.push(new Product("Diet Coke 12Pk","049000028911"));
    this.prodDb.push(new Product("Diet Coke 24Pk","049000046571"));
  }

  getDatabaseofItems(): Product[]{
    return this.prodDb;
  }
}
