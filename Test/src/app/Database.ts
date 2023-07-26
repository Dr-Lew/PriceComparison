import { Product } from "src/app/models/product.model";

export class Database{
      private static itemDb: Product[] = [
      {name:"Coca Cola 12Pk",upc:"049000028904",quantity: 0,image:"/assets/cocacola-image-placeholder.jpg", category:"beverage"},
      {name:"Nacho Cheese Doritos, 9.75oz",upc:"028400642033",quantity: 0,image:"/assets/doritoes-image-placeholder.jpg", category:"pantry"},
      {name:"Jif Creamy Peanut Butter, 16oz",upc:"051500255162",quantity: 0,image:"/assets/jif-image-placeholder.jpg", category:"pantry"},
      {name:"Lay's Classic Potato Chips, 10.25oz",upc:"028400598125",quantity: 0,image:"/assets/lays-image-placeholder.jpg", category:"pantry"},
      {name:"Wonder Round Top White Sliced Bread - 20oz",upc:"072250011372",quantity: 0,image:"/assets/wonderbread-image-placeholder.jpg", category:"bakery"},
      {name:"Heinz Tomato Ketchup, 20oz",upc:"013000006408",quantity: 0, image:"/assets/heinz-image-placeholder.jpg", category:"pantry"},
      {name:"Pepsi Cola Made with Real Sugar Soda Pop, 12 oz , 12 pk",upc:"0492712003071",quantity: 0, image:"/assets/pepsi-image-placeholder.jpg", category:"beverage"},
      {name:"Sprite - 12pk/12 fl oz",upc:"049000028928",quantity: 0, image:"/assets/sprite-image-placeholder.jpg", category:"beverage"},
      {name:"Waterloo Sparkling Water, Black Cherry, 12 fl oz, 8 pk",upc:"819215020150",quantity: 0, image:"/assets/waterloo-image-placeholder.jpg", category:"beverage"},
      {name:"Pepperidge Farm Whole Grain 100% Whole Wheat Bread - 24oz",upc:"014100085997",quantity: 0, image:"/assets/pepperidgewheat-image-placeholder.jpg", category:"bakery"},
      {name:"Nature's Own 100% Whole Wheat Bread - 20oz",upc:"072250037129",quantity: 0, image:"/assets/naturesown-image-placeholder.jpg", category:"bakery"},
      {name:"Pepperidge Farm Raisin Cinnamon Swirl Breakfast Bread - 16oz",upc:"014100071112",quantity: 0, image:"/assets/pepperidgeraisin-image-placeholder.jpg", category:"bakery"}
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