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


   //Loads our data csv file into an array of arrays
   loadCSV(){
      const papa: Papa = new Papa();
      papa.parse("/assets/product-database.csv",{download: true, complete:(result) => {
         this.createProducts(result);

         }
      });
   }

   //Takes each array and creates a product item from it, adding it to our internal product list.
   //row[0] = Product Category
   //row[1] = Product Name
   //row[2] = Product UPC
   //row[3] = Product Image Location
   createProducts(parsedCsv: any){
      for(let row of parsedCsv.data){
         this.itemDb.push(new Product(row[0],row[1],row[2],row[3],row[4]));
      }
   }

     // Add a method to return all products from the database
  getAllProducts(): Product[] {
   return this.itemDb;
 }

 // Add a method to return products filtered by category
 getProductsByCategory(category: string): Product[] {
   return this.itemDb.filter((product) => product.cat === category);
 }

}
