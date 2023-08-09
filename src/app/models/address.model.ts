/**
 * The address class models an address consisting of a street, city, state, and zip code.
 */

export class Address {
  street: string;
  city:   string;
  state:  string;
  zip:    string;

  constructor(street: string, city: string, state: string, zip: string) {
    this.street = street;
    this.city = city;
    this.state = state;
    this.zip = zip;
  }

}
