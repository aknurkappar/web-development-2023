import { Component } from '@angular/core';
import {Product} from "../app.component";
@Component({
  selector: 'app-product-list',
  templateUrl: './appProductList.component.html',
  styleUrls: ['./appProductList.component.css']
})

export class AppProductListComponent{
  products : Product[] = [
    {name: "iPhone 12", description: "Super Retina XDR display\n" +
        "6.1‑inch (diagonal) all‑screen OLED display\n" +
        "2532‑by‑1170-pixel resolution at 460 ppi"},
    {name: "iPhone 12 Pro", description: "Super Retina XDR display\n" +
        "6.1‑inch (diagonal) all‑screen OLED display\n" +
        "2532‑by‑1170-pixel resolution at 460 ppi"},
    {name: "iPhone 12 Pro MAX", description: "Super Retina XDR display\n" +
        "6.7‑inch (diagonal) all‑screen OLED display\n" +
        "2778‑by‑1284-pixel resolution at 458 ppi"}]

  share(){

  }

}
