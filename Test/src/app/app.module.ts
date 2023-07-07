import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserSetupComponent } from './user-setup/user-setup.component';
import { FormsModule, ReactiveFormsModule} from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';


@NgModule({
  declarations: [
    AppComponent,
    UserSetupComponent,
    ShoppingListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatSelectModule,
  ],
  providers: [],
  exports: [
    UserSetupComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }