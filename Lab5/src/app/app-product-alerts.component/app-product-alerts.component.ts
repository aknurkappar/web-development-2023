import { Component, Input, Output, EventEmitter  } from '@angular/core';
import {Product} from "../Product";



@Component({
  selector: 'app-product-alerts',
  templateUrl: './app-product-alerts.component.html',
  styleUrls: ['./app-product-alerts.component.css']
})

export class AppProductAlertsComponent {
  @Input() product: Product | undefined;
  @Output() notify = new EventEmitter();
}
