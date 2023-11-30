import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {CategoriesComponent} from "./categories/categories.component";
import {ListAppareilComponent} from "./list-appareil/list-appareil.component";

const routes: Routes = [
  {path: 'category' ,component:CategoriesComponent},
  {path: 'Devices' ,component:ListAppareilComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
