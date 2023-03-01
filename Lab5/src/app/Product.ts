import {Category} from "./Category";
import {Like} from "./Like";

export class Product{
  static idCounter : number = 0;
  id : number;
  name : String;
  description : String[];
  price: number;
  rating : number;
  link : String;
  images : String[];
  category : Category;
  like : Like;

  constructor(name : String,
              description : String[],
              price: number,
              rating : number,
              link : String,
              images : String[],
              category : Category,
              like : number
  ) {
    this.id = Product.idCounter + 1;
    this.name = name;
    this.description = description;
    this.price = price;
    this.rating = rating;
    this.link = link;
    this.images = images;
    this.category = category
    this.like = new Like(like);
    Product.idCounter = Product.idCounter + 1
  }
}
