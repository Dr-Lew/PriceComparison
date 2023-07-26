import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserSetupComponent } from './user-setup/user-setup.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';

import { FormsModule, ReactiveFormsModule} from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";
import {MatButtonModule} from "@angular/material/button";
import {MatListModule} from "@angular/material/list";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {MatStepperModule} from "@angular/material/stepper";
import { AppRoutingModule } from './app-routing.module';
import {MatGridListModule} from "@angular/material/grid-list";
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { DropdownComponent } from './dropdown/dropdown.component';


@NgModule({
  declarations: [
    AppComponent,
    UserSetupComponent,
    ShoppingListComponent,
    ShoppingCartComponent,
    DropdownComponent,
  ],

    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        MatInputModule,
        MatSelectModule,
        MatButtonModule,
        MatListModule,
        MatButtonToggleModule,
        MatStepperModule,
        AppRoutingModule,
        MatGridListModule,
    ],
  providers: [
    Title
  ],
  exports: [
    UserSetupComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
