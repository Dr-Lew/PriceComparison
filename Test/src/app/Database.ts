import { Product } from "src/app/models/product.model";
import { Papa } from "ngx-papaparse";

export class Database{
      private  itemDb: Product[] = [
   ];



   //Returns the full database. Used for testing right now.
   getDatabaseofItems(): Product[]{
    return this.itemDb;

   }

   //Searches the database for the appropriate image using the name of the product to find it.
   //If the product isn't found, it returns an empty string.
    getProductImageByName(name: String): String{
      const ret = this.itemDb.find((product) => product.name === name);
      return  ret ? ret.image : "";

   }


   loadCSV(){
      const papa: Papa = new Papa();
      papa.parse("/assets/test-data.csv",{download: true, complete:(result) => {
         this.createProducts(result);

         }
      });
   }

   createProducts(data: any){
      for(let row of data.data){
         this.itemDb.push(new Product(row[0],row[1],row[2],row[3]));
      }

   }

}
