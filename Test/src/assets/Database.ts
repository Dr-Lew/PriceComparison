import { Item } from "src/app/models/item.model";
export class Database{
   itemDb: Item[] = [];
   constructor(){
    this.itemDb.push(new Item("Coca-Cola 12Pk","049000028904"));
    this.itemDb.push(new Item("Diet Coke 12Pk","049000028911"));
    this.itemDb.push(new Item("Diet Coke 24Pk","049000046571"));
   }


   getDatabaseofItems(): Item[]{
    return this.itemDb;

   }
    
}
