import { Component } from '@angular/core';

interface Product{
  name : String,
  description : String
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  storeName : String = "Aknur's store"
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
