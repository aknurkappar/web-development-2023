import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {AppTopBarComponent} from "./top-bar.component/apptopbar.component";
import {AppProductAlertsComponent} from "./app-product-alerts.component/app-product-alerts.component";
import { CategoriesComponent } from './categories/categories.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { ProductListComponent } from './product-list/product-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AppTopBarComponent,
    AppProductAlertsComponent,
    CategoriesComponent,
    ProductItemComponent,
    ProductListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent, AppTopBarComponent, AppProductAlertsComponent, CategoriesComponent, ProductItemComponent, ProductListComponent]
})
export class AppModule { }
