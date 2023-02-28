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
    this.categories = [new Category("All"),
      new Category("Mouses"),
      new Category("Keyboards"),
      new Category("Headphones")]
    this.categories[0].isActive = true
    this.selectedCategory = this.categories.filter(category => category.isActive)[0]
  }

  showProducts(category : Category){
    var index = this.categories.indexOf(category);
    this.categories.map(category => category.isActive = false)
    this.categories[index].isActive = !this.categories[index].isActive;
  }
  ngOnInit(): void {}
}
