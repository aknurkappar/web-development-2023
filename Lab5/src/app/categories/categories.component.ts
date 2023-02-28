import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit{
  categories : String[];
  selectedCategory: String;

  constructor() {
    this.categories = ["All", "Mouses", "Keyboards", "Headphones"]
    this.selectedCategory = this.categories[0]
  }

  ngOnInit(): void {}

}
