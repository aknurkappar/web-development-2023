import { Component } from '@angular/core';

export interface Product{
  name : String,
  description : String
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

}
