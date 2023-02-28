// @ts-ignore
export class Product{
  name : String;
  description : String[];
  price: number;
  rating : number;
  link : String;
  images : String[];
  category : String;

  constructor(name : String,
              description : String[],
              price: number,
              rating : number,
              link : String,
              images : String[],
              category : String) {
    this.name = name;
    this.description = description;
    this.price = price;
    this.rating = rating;
    this.link = link;
    this.images = images;
    this.category = category
  }
}
