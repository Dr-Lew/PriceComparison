import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent {
  public options: string[] = ['Select a category', 'beverage', 'bakery', 'pantry', 'candies', 'dairy', 'pets', 'snacks', 'baby'];
  @Output() categorySelected: EventEmitter<string> = new EventEmitter<string>();

  onSelectCategory(event: Event): void {
    const selectedValue = (event.target as HTMLSelectElement).value;
    this.categorySelected.emit(selectedValue);
  }
}
