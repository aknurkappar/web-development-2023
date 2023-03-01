import {Component, OnInit} from '@angular/core';
import {Category} from "../Category";

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit{
  categories : Category[];
  selectedCategory: Category;
  constructor() {
    this.categories = [
      new Category("All"),
      new Category("Mouses"),
      new Category("Keyboards"),
      new Category("Headphones"),
      new Category("Laptops")
    ]
    this.selectedCategory = new Category("")
  }

  showProducts(category : Category){
    var index = this.categories.indexOf(category);
    this.categories.forEach(category => category.isActive = false)
    this.categories[index].isActive = true;
    this.selectedCategory = this.categories[index]
  }
  ngOnInit(): void {}
}
