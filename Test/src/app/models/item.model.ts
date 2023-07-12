import {Store} from "./store.model";

export class Item {
  name: string;
  upc: string;

  constructor(name: string, upc: string) {
    this.name = name;
    this.upc = upc;
  }

}
