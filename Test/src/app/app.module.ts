import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserSetupComponent } from './user-setup/user-setup.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';

import { FormsModule, ReactiveFormsModule} from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from "@angular/material/button";
import {MatListModule} from "@angular/material/list";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {MatStepperModule} from "@angular/material/stepper";
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatGridListModule } from '@angular/material/grid-list';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppRoutingModule } from './app-routing.module';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import {MatToolbarModule} from "@angular/material/toolbar";

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
        MatPaginatorModule,
        MatGridListModule,
        FlexLayoutModule,
        AppRoutingModule,
        MatToolbarModule
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
