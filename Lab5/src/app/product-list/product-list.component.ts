import {Component, Input, OnInit, Output} from '@angular/core';
import {Product} from "../Product";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit{
  @Input() declare selectedCategory : String
  products: Product[] = [
    {
      name: "Мышь Logitech G502 Hero черный",
      description: ["тип подключения: проводная", "тип сенсора: оптическая светодиодная", "интерфейс: USB",
        "дизайн: для правой руки", "разрешение оптического сенсора : 16000 dpi"],
      price: 25585, rating: 5,
      link: "https://kaspi.kz/shop/p/logitech-g502-hero-chernyi-9101669/?c=750000000#!/item",
      images: ["logitech-g-g502-hero-black-1.jpeg", "logitech-g-g502-hero-black-2.jpeg", "logitech-g-g502-hero-black-3.jpeg", "logitech-g-g502-hero-black-4.jpeg"],
      category : "mouses"
    },

    {
      name: "Мышь Logitech MX Master 3S 910-006559 черный",
      description: ["тип подключения: проводная", "тип сенсора: оптическая светодиодная",
        "интерфейс:  Bluetooth", "дизайн: для правой руки", "разрешение оптического сенсора : 8000 dpi"],
      price: 58985, rating: 5,
      link: "https://kaspi.kz/shop/p/logitech-mx-master-3s-910-006559-chernyi-106172365/?c=750000000#!/item",
      images: ["logitech-mx-master-1.jpeg", "logitech-mx-master-2.jpeg", "logitech-mx-master-3.jpeg", "logitech-mx-master-4.jpeg"]
    ,      category : "mouses"
    },

    {
      name: "Мышь Logitech Pebble M350 розовый",
      description: ["тип подключения: проводная", "тип сенсора: оптическая светодиодная", "интерфейс: USB, ,Bluetooth",
        "дизайн: для правой и левой руки", "разрешение оптического сенсора : 1000 dpi"],
      price: 9977, rating: 5,
      link: "https://kaspi.kz/shop/p/logitech-pebble-m350-rozovyi-100370949/?c=750000000#!/item",
      images: ["logitech-pebble-rozovyj-1.jpeg", "logitech-pebble-rozovyj-2.jpeg", "logitech-pebble-rozovyj-3.jpeg"]
      ,      category : "mouses"
    },

    {
      name: "Клавиатура Logitech K380 920-007584 черный",
      description: ["тип: мембранная", "дизайн: классическая", "назначение: для ноутбука", "тип подключения: беспроводная \n"],
      price: 19480, rating: 5,
      link: "https://kaspi.kz/shop/p/logitech-k380-920-007584-chernyi-9200752/?c=750000000#!/item",
      images: ["logitech-k380-wireless-cernyj-1.jpeg", "logitech-k380-wireless-cernyj-2.jpeg", "logitech-k380-wireless-cernyj-3.jpeg"]
      ,      category : "keyboard"
    },

    {
      name: "Клавиатура Logitech K380 розовый",
      description: ["тип: мембранная", "дизайн: классическая", "назначение: для настольного компьютера", "тип подключения: беспроводная"],
      price: 19480, rating: 5,
      link: "https://kaspi.kz/shop/p/logitech-k380-rozovyi-105573072/?c=750000000#!/item",
      images: ["logitech-k380-rozovyj-1.jpeg", "logitech-k380-rozovyj-2.jpeg", "logitech-k380-rozovyj-3.jpeg"]
      ,      category : "keyboard"
    },

    {
      name: "Наушники Realme Buds T100 черный",
      description: ["тип: гарнитура", "вид: внутриканальные", "подключение: беспроводное", "тип подключения: беспроводная"],
      price: 10820, rating: 5,
      link: "https://kaspi.kz/shop/p/realme-buds-t100-chernyi-107357596/?c=750000000#!/item",
      images: ["realme-buds-t100-1.jpeg", "realme-buds-t100-2.jpeg", "realme-buds-t100-3.jpeg"]
      ,      category : "headphones"
    },

    {
      name: "Наушники Logitech 981-001050 черный",
      description: ["тип: гарнитура", "вид: накладные", "подключение: беспроводное", "тип акустического оформления: закрытые", "тип крепления: оголовье",
        "система активного шумоподавления: Нет", "микрофон: Да"],
      price: 39990, rating: 5,
      link: "https://kaspi.kz/shop/p/logitech-981-001050-chernyi-104516664/?c=750000000#!/item",
      images: ["logitech-981-001050-cernyj-1.jpeg", "logitech-981-001050-cernyj-2.jpeg", "logitech-981-001050-cernyj-3.jpeg"]
      ,      category : "headphones"
    },

    {
      name: "Наушники Marshall Major IV черный",
      description: ["тип: гарнитура", "вид: накладные", "подключение: беспроводное", "тип акустического оформления: закрытые", "тип крепления: оголовье",
        "система активного шумоподавления: Нет", "микрофон: Да"],
      price: 114195, rating: 5,
      link: "https://kaspi.kz/shop/p/marshall-major-iv-chernyi-102138144/?c=750000000#!/item",
      images: ["marshall-major-iv-1.jpeg", "marshall-major-iv-2.jpeg", "marshall-major-iv-3.jpeg"]
      ,      category : "headphones"
    },

    {
      name: "Клавиатура T-WOLF TF-800 черный",
      description: ["тип: оптическая", "дизайн: игровая", "назначение: для настольного компьютера", "тип подключения: проводная"],
      price: 10990, rating: 4,
      link: "https://kaspi.kz/shop/p/t-wolf-tf-800-chernyi-106467552/?c=750000000#!/item",
      images: ["t-wolf-tf-800-1.jpeg"]
      ,      category : "headphones"
    },
  ]

  ngOnInit(): void {}

}
