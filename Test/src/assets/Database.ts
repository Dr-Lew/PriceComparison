import { Product } from "src/app/models/product.model";
export class Database{
   itemDb: Product[] = [];
   constructor(){
    this.itemDb.push(new Product("Coca-Cola 12Pk","049000028904"));
    this.itemDb.push(new Product("Diet Coke 12Pk","049000028911"));
    this.itemDb.push(new Product("Diet Coke 24Pk","049000046571"));
   }


   getDatabaseofItems(): Product[]{
    return this.itemDb;

   }

}
