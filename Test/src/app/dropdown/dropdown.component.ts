import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {
  @Input() options: string[] = [];
  @Input() paginationOptions: string[] = [];

  @Output() categorySelected: EventEmitter<string> = new EventEmitter<string>();
  @Output() pageSizeSelected: EventEmitter<string> = new EventEmitter<string>();

  ngOnInit() {
    this.categorySelected.emit('Select a category');
  }

  onSelectCategory(event: Event): void {
    const selectedValue = (event.target as HTMLSelectElement).value;
    this.categorySelected.emit(selectedValue);
  }

  // Handle the pagination dropdown change.
  onPageSizeSelected(event: Event): void {
    const selectedValue = (event.target as HTMLSelectElement).value;
    this.pageSizeSelected.emit(selectedValue);
  }
}
