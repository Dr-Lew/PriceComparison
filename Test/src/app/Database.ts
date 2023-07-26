import { Product } from "src/app/models/product.model";

export class Database{
      private static itemDb: Product[] = [
      {name:"Coca Cola 12Pk",upc:"049000028904",quantity: 0,image:"/assets/cocacola-image-placeholder.jpg"},
      {name:"Nacho Cheese Doritos, 9.75oz",upc:"028400642033",quantity: 0,image:"/assets/doritoes-image-placeholder.jpg"},
      {name:"Jif Creamy Peanut Butter, 16oz",upc:"051500255162",quantity: 0,image:"/assets/jif-image-placeholder.jpg"},
      {name:"Lay's Classic Potato Chips, 10.25oz",upc:"028400598125",quantity: 0,image:"/assets/lays-image-placeholder.jpg"},
      {name:"Coca Wonder Classic White Bread",upc:"072250011372",quantity: 0,image:"/assets/wonderbread-image-placeholder.jpg"},
      {name:"Heinz Tomato Ketchup, 20oz",upc:"013000006408",quantity: 0, image:"/assets/heinz-image-placeholder.jpg"}
   ];



   //Returns the full database. Used for testing right now.
   static  getDatabaseofItems(): Product[]{
    return this.itemDb;

   }

   //Searches the database for the appropriate image using the name of the product to find it.
   //If the product isn't found, it returns an empty string.
   static getProductImageByName(name: String): String{
      const ret = this.itemDb.find((product) => product.name === name);
      return  ret ? ret.image : "";

   }

}
