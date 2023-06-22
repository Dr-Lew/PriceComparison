import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from "@angular/forms";

interface Item {
  name: string;
  quantity: number;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {
  zipcode: string = "";

  items: Item[] = [
    { name: '', quantity: 0 },
    { name: '', quantity: 0 },
    { name: '', quantity: 0 },
    { name: '', quantity: 0 },
    { name: '', quantity: 0 }
  ];
  savedItems: Item[] = [];

  start() {
    this.savedItems = this.items.filter(item => item.name !== '' && item.quantity !== 0);
  }

  target() {
    // Functionality for Target button
    console.log("Target button clicked!");
  }

  walmart() {
    // Functionality for Wal-Mart button
    console.log("Wal-Mart button clicked!");
  }

  hyvee() {
    // Functionality for Hy-Vee button
    console.log("Hy-Vee button clicked!");
  }

  submit() {
    console.log(this.zipcode);
  }

}
