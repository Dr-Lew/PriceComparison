import { NgModule } from '@angular/core';
import {Routes, RouterModule} from "@angular/router";

import {UserSetupComponent} from "./user-setup/user-setup.component";
import {ShoppingListComponent} from "./shopping-list/shopping-list.component";

const routes: Routes = [
  {path: '', component: UserSetupComponent, pathMatch:'full'},
  {path: 'shoppingList', component: ShoppingListComponent}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
