import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {AppTopBarComponent} from "./top-bar.component/apptopbar.component";
import {AppProductListComponent} from "./app-produc-list.component/appProductList.component";

@NgModule({
  declarations: [
    AppComponent,
    AppTopBarComponent,
    AppProductListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent, AppTopBarComponent, AppProductListComponent]
})
export class AppModule { }
