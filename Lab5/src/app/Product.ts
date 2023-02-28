import {Category} from "./Category";

export class Product{
  name : String;
  description : String[];
  price: number;
  rating : number;
  link : String;
  images : String[];
  category : Category;

  constructor(name : String,
              description : String[],
              price: number,
              rating : number,
              link : String,
              images : String[],
              category : Category) {
    this.name = name;
    this.description = description;
    this.price = price;
    this.rating = rating;
    this.link = link;
    this.images = images;
    this.category = category
  }
}
