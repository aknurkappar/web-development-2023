import {Component, Input, OnInit, Output} from '@angular/core';
import {Product} from "../Product";
import {Category} from "../Category";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit{
  @Input() declare selectedCategory : Category
  @Input() declare categories : Category[]
  products: Product[] = [
    new Product("Мышь Logitech G502 Hero черный",
      ["тип подключения: проводная", "тип сенсора: оптическая светодиодная", "интерфейс: USB",
        "дизайн: для правой руки", "разрешение оптического сенсора : 16000 dpi"], 25585,5,
      "https://kaspi.kz/shop/p/logitech-g502-hero-chernyi-9101669/?c=750000000#!/item",
      ["logitech-g-g502-hero-black-1.jpeg", "logitech-g-g502-hero-black-2.jpeg", "logitech-g-g502-hero-black-3.jpeg", "logitech-g-g502-hero-black-4.jpeg"],
      new Category("Mouses")),
    new Product(
      "Мышь Logitech MX Master 3S 910-006559 черный",
      ["тип подключения: проводная", "тип сенсора: оптическая светодиодная",
        "интерфейс:  Bluetooth", "дизайн: для правой руки", "разрешение оптического сенсора : 8000 dpi"],
      58985, 5,
      "https://kaspi.kz/shop/p/logitech-mx-master-3s-910-006559-chernyi-106172365/?c=750000000#!/item",
      ["logitech-mx-master-1.jpeg", "logitech-mx-master-2.jpeg", "logitech-mx-master-3.jpeg", "logitech-mx-master-4.jpeg"],
      new Category("Mouses")
    ),
    new Product(
      "Мышь Logitech Pebble M350 розовый",
      ["тип подключения: проводная", "тип сенсора: оптическая светодиодная", "интерфейс: USB, ,Bluetooth",
        "дизайн: для правой и левой руки", "разрешение оптического сенсора : 1000 dpi"],
      9977, 5,
      "https://kaspi.kz/shop/p/logitech-pebble-m350-rozovyi-100370949/?c=750000000#!/item",
      ["logitech-pebble-rozovyj-1.jpeg", "logitech-pebble-rozovyj-2.jpeg", "logitech-pebble-rozovyj-3.jpeg"],
      new Category("Mouses"),
    ),

    new Product(
      "Клавиатура Logitech K380 920-007584 черный",
      ["тип: мембранная", "дизайн: классическая", "назначение: для ноутбука", "тип подключения: беспроводная \n"],
      19480, 5,
      "https://kaspi.kz/shop/p/logitech-k380-920-007584-chernyi-9200752/?c=750000000#!/item",
      ["logitech-k380-wireless-cernyj-1.jpeg", "logitech-k380-wireless-cernyj-2.jpeg", "logitech-k380-wireless-cernyj-3.jpeg"],
      new Category("Keyboards"),
    ),

    new Product(
      "Клавиатура Logitech K380 розовый",
      ["тип: мембранная", "дизайн: классическая", "назначение: для настольного компьютера", "тип подключения: беспроводная"],
      19480, 5,
      "https://kaspi.kz/shop/p/logitech-k380-rozovyi-105573072/?c=750000000#!/item",
      ["logitech-k380-rozovyj-1.jpeg", "logitech-k380-rozovyj-2.jpeg", "logitech-k380-rozovyj-3.jpeg"],

      new Category("Keyboards"),
    ),
    new Product(
      "Наушники Realme Buds T100 черный",
      ["тип: гарнитура", "вид: внутриканальные", "подключение: беспроводное", "тип подключения: беспроводная"],
      10820, 5,
      "https://kaspi.kz/shop/p/realme-buds-t100-chernyi-107357596/?c=750000000#!/item",
      ["realme-buds-t100-1.jpeg", "realme-buds-t100-2.jpeg", "realme-buds-t100-3.jpeg"],
      new Category("Headphones"),
    ),
    new Product(
      "Наушники Logitech 981-001050 черный",
      ["тип: гарнитура", "вид: накладные", "подключение: беспроводное", "тип акустического оформления: закрытые", "тип крепления: оголовье",
        "система активного шумоподавления: Нет", "микрофон: Да"],
      39990, 5,
      "https://kaspi.kz/shop/p/logitech-981-001050-chernyi-104516664/?c=750000000#!/item",
      ["logitech-981-001050-cernyj-1.jpeg", "logitech-981-001050-cernyj-2.jpeg", "logitech-981-001050-cernyj-3.jpeg"],
      new Category("Headphones"),
    ),
    new Product(
      "Наушники Marshall Major IV черный",
      ["тип: гарнитура", "вид: накладные", "подключение: беспроводное", "тип акустического оформления: закрытые", "тип крепления: оголовье",
        "система активного шумоподавления: Нет", "микрофон: Да"],
      114195, 5,
      "https://kaspi.kz/shop/p/marshall-major-iv-chernyi-102138144/?c=750000000#!/item",
      ["marshall-major-iv-1.jpeg", "marshall-major-iv-2.jpeg", "marshall-major-iv-3.jpeg"],

      new Category("Headphones"),
    ),
    new Product(
"Клавиатура T-WOLF TF-800 черный",
      ["тип: оптическая", "дизайн: игровая", "назначение: для настольного компьютера", "тип подключения: проводная"],
      10990, 4,
      "https://kaspi.kz/shop/p/t-wolf-tf-800-chernyi-106467552/?c=750000000#!/item",
      ["t-wolf-tf-800-1.jpeg"],
      new Category("Keyboards"),
    )
  ]
  ngOnInit(): void {}
}
