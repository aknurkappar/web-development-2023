import {Component, Input, OnInit} from '@angular/core';
import {Product} from "../Product";

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit{
  @Input() declare product : Product
  shareViaWhatsApp(link : String){
    window.open("https://web.whatsapp.com/send?text=" + link, "_blank");
  }
  shareViaTelegram(link : String){
    window.open("https://telegram.me/share/url?url=" + link, "_blank");
  }
  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }
  ngOnInit(): void {}
}
