import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {AppTopBarComponent} from "./top-bar.component/apptopbar.component";
import {AppProductListComponent} from "./app-produc-list.component/appProductList.component";
import {AppProductAlertsComponent} from "./app-produc-list.component/app-product-alerts.component/app-product-alerts.component";

@NgModule({
  declarations: [
    AppComponent,
    AppTopBarComponent,
    AppProductListComponent,
    AppProductAlertsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent, AppTopBarComponent, AppProductListComponent, AppProductAlertsComponent]
})
export class AppModule { }
