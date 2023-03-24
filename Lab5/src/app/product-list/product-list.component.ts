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
      new Category("Mouses"), 1),
    new Product(
      "Мышь Logitech MX Master 3S 910-006559 черный",
      ["тип подключения: проводная", "тип сенсора: оптическая светодиодная",
        "интерфейс:  Bluetooth", "дизайн: для правой руки", "разрешение оптического сенсора : 8000 dpi"],
      58985, 5,
      "https://kaspi.kz/shop/p/logitech-mx-master-3s-910-006559-chernyi-106172365/?c=750000000#!/item",
      ["logitech-mx-master-1.jpeg", "logitech-mx-master-2.jpeg", "logitech-mx-master-3.jpeg", "logitech-mx-master-4.jpeg"],
      new Category("Mouses"), 9
    ),
    new Product(
      "Мышь Logitech Pebble M350 розовый",
      ["тип подключения: проводная", "тип сенсора: оптическая светодиодная", "интерфейс: USB, ,Bluetooth",
        "дизайн: для правой и левой руки", "разрешение оптического сенсора : 1000 dpi"],
      9977, 5,
      "https://kaspi.kz/shop/p/logitech-pebble-m350-rozovyi-100370949/?c=750000000#!/item",
      ["logitech-pebble-rozovyj-1.jpeg", "logitech-pebble-rozovyj-2.jpeg", "logitech-pebble-rozovyj-3.jpeg"],
      new Category("Mouses"), 10
    ),

    new Product(
      "Клавиатура Logitech K380 920-007584 черный",
      ["тип: мембранная", "дизайн: классическая", "назначение: для ноутбука", "тип подключения: беспроводная \n"],
      19480, 5,
      "https://kaspi.kz/shop/p/logitech-k380-920-007584-chernyi-9200752/?c=750000000#!/item",
      ["logitech-k380-wireless-cernyj-1.jpeg", "logitech-k380-wireless-cernyj-2.jpeg", "logitech-k380-wireless-cernyj-3.jpeg"],
      new Category("Keyboards"), 12
    ),

    new Product(
      "Клавиатура Logitech K380 розовый",
      ["тип: мембранная", "дизайн: классическая", "назначение: для настольного компьютера", "тип подключения: беспроводная"],
      19480, 5,
      "https://kaspi.kz/shop/p/logitech-k380-rozovyi-105573072/?c=750000000#!/item",
      ["logitech-k380-rozovyj-1.jpeg", "logitech-k380-rozovyj-2.jpeg", "logitech-k380-rozovyj-3.jpeg"],

      new Category("Keyboards"), 213
    ),
    new Product(
      "Наушники Realme Buds T100 черный",
      ["тип: гарнитура", "вид: внутриканальные", "подключение: беспроводное", "тип подключения: беспроводная"],
      10820, 5,
      "https://kaspi.kz/shop/p/realme-buds-t100-chernyi-107357596/?c=750000000#!/item",
      ["realme-buds-t100-1.jpeg", "realme-buds-t100-2.jpeg", "realme-buds-t100-3.jpeg"],
      new Category("Headphones"), 423
    ),
    new Product(
      "Наушники Logitech 981-001050 черный",
      ["тип: гарнитура", "вид: накладные", "подключение: беспроводное", "тип акустического оформления: закрытые", "тип крепления: оголовье",
        "система активного шумоподавления: Нет", "микрофон: Да"],
      39990, 5,
      "https://kaspi.kz/shop/p/logitech-981-001050-chernyi-104516664/?c=750000000#!/item",
      ["logitech-981-001050-cernyj-1.jpeg", "logitech-981-001050-cernyj-2.jpeg", "logitech-981-001050-cernyj-3.jpeg"],
      new Category("Headphones"), 326
    ),
    new Product(
      "Наушники Marshall Major IV черный",
      ["тип: гарнитура", "вид: накладные", "подключение: беспроводное", "тип акустического оформления: закрытые", "тип крепления: оголовье",
        "система активного шумоподавления: Нет", "микрофон: Да"],
      114195, 5,
      "https://kaspi.kz/shop/p/marshall-major-iv-chernyi-102138144/?c=750000000#!/item",
      ["marshall-major-iv-1.jpeg", "marshall-major-iv-2.jpeg", "marshall-major-iv-3.jpeg"],

      new Category("Headphones"), 772
    ),
    new Product(
"Клавиатура T-WOLF TF-800 черный",
      ["тип: оптическая", "дизайн: игровая", "назначение: для настольного компьютера", "тип подключения: проводная"],
      10990, 4,
      "https://kaspi.kz/shop/p/t-wolf-tf-800-chernyi-106467552/?c=750000000#!/item",
      ["t-wolf-tf-800-1.jpeg"],
      new Category("Keyboards"),471
    ),
    new Product(
      "Ноутбук Apple MacBook Air 13 MLXW3 серый",
      ["диагональ экрана: 13.6 дюйм", "процессор: Apple M2", "видеокарта: Apple M2 8-Core", "размер оперативной памяти: 8 ГБ", "тип жесткого диска: SSD"],
      626725, 5,
      "https://kaspi.kz/shop/p/apple-macbook-air-13-mlxw3-seryi-105933794/?c=750000000#!/item",
      ["apple-macbook-air-m2-1.jpeg", "apple-macbook-air-m2-2.jpeg", "apple-macbook-air-m2-3.jpeg", "apple-macbook-air-m2-4.jpeg"],
      new Category("Laptops"),471
    ),
    new Product(
      "Ноутбук ASUS X515EA-BQ3269 90NB0TY1-M038L0 серый",
      ["диагональ экрана: 15.6 дюйм", "процессор: Intel Core i3 1115G4", "видеокарта: Intel UHD Graphics", "размер оперативной памяти: 8 ГБ"],
      179990, 4,
      "https://kaspi.kz/shop/p/asus-x515ea-bq3269-90nb0ty1-m038l0-seryi-107847924/?c=750000000#!/item",
      ["asus-x515ea-1.jpeg", "asus-x515ea-2.jpeg", "asus-x515ea-3.jpeg"],
      new Category("Laptops"),376
    ),
    new Product(
      "Ноутбук ASUS TUF Gaming A15 FA506IHRB-HN084 90NR07G7-M008C0 черный",
      ["диагональ экрана: 15.6 дюйм", "процессор: AMD Ryzen 5 4600H", "видеокарта: nVidia GeForce GTX1650", "размер оперативной памяти: 8 ГБ"],
      369990, 4,
      "https://kaspi.kz/shop/p/asus-tuf-gaming-a15-fa506ihrb-hn084-90nr07g7-m008c0-chernyi-106255184/?c=750000000#!/item",
      ["asus-tuf-gaming-a15-1.jpeg",  "asus-tuf-gaming-a15-2.jpeg", "asus-tuf-gaming-a15-3.jpeg", "asus-tuf-gaming-a15-4.jpeg"],
      new Category("Laptops"),678
    ),
    new Product(
      "Ноутбук Apple MacBook Air 13 MGN63 серый",
      ["диагональ экрана: 13.3 дюйм", "процессор: Apple M1", "видеокарта: Apple M1 7 core", "размер оперативной памяти: 8 ГБ"],
      478888, 5,
      "https://kaspi.kz/shop/p/apple-macbook-air-13-mgn63-seryi-100797845/?c=750000000#!/item",
      ["apple-macbook-air-2020-13-1.jpeg", "apple-macbook-air-2020-13-2.jpeg", "apple-macbook-air-2020-13-3.jpeg"],
      new Category("Laptops"),783
    ),
    new Product(
      "Ноутбук ASUS VivoBook Pro K6500ZC-MA378 90NB0XK1-M00NE0 синий",
      [ "диагональ экрана: 15.6 дюйм", "процессор: Intel Core i7-12700H", "видеокарта: NVIDIA GeForce RTX 3050", "размер оперативной памяти: 16 ГБ"],
      599990, 5,
      "https://kaspi.kz/shop/p/asus-vivobook-pro-k6500zc-ma378-90nb0xk1-m00ne0-sinii-108345124/?c=750000000#!/item",
      ["asus-vivobook-pro-1.jpeg", "asus-vivobook-pro-2.jpeg", "asus-vivobook-pro-3.jpeg", "asus-vivobook-pro-4.jpeg", "asus-vivobook-pro-5.jpeg"],
      new Category("Laptops"),783
    ),
    new Product(
      "Наушники TWS F9-5 черные",
      ["тип: гарнитура", "вид: внутриканальные", "микрофон: Да"],
      3373, 5,
      "https://kaspi.kz/shop/p/tws-f9-5-chernye-101769530/?c=750000000#!/item",
      ["tws-f9-5-cernyj-1.jpeg", "tws-f9-5-cernyj-2.jpeg", "tws-f9-5-cernyj-3.jpeg"],
      new Category("Headphones"),834
    ),
    new Product(
      "Наушники Xiaomi Redmi AirDots S черный",
      ["тип: гарнитура", "вид: внутриканальные", "подключение: беспроводное", "микрофон: Да"],
      4500, 4,
      "https://kaspi.kz/shop/p/xiaomi-redmi-airdots-s-chernyi-100286960/?c=750000000#!/item",
      ["xiaomi-redmi-airdots-1.jpeg", "xiaomi-redmi-airdots-2.jpeg", "xiaomi-redmi-airdots-3.jpeg"],
      new Category("Headphones"),834
    ),
    new Product(
      "Мышь Xiaomi Mi Dual Mode Wireless Mouse Silent Edition белый",
      ["тип подключения: беспроводная", "тип сенсора: оптическая светодиодная", "разрешение оптического сенсора: 1300 dpi"],
      6720, 5,
      "https://kaspi.kz/shop/p/xiaomi-mi-dual-mode-wireless-mouse-silent-edition-belyi-101190787/?c=750000000#!/item",
      ["xiaomi-mi-wireless-mouse-1.jpeg", "xiaomi-mi-wireless-mouse-2.jpeg", "xiaomi-mi-wireless-mouse-3.jpeg", "xiaomi-mi-wireless-mouse-4.jpeg"],
      new Category("Mouses"),1034
    ),
    new Product(
      "Мышь LS Pro черный",
      ["тип подключения: беспроводная", "тип сенсора: оптическая светодиодная", "разрешение оптического сенсора: 1600 dpi", "игровая: Нет"],
      15000, 5,
      "https://kaspi.kz/shop/p/ls-pro-chernyi-107622516/?c=750000000#!/item",
      ["besshumnaya-bluetooth-mysh-1.jpeg", "besshumnaya-bluetooth-mysh-2.jpeg"],
      new Category("Mouses"),434
    ),
    new Product(
      "Клавиатура Smartbuy SBK-333U-W белый",
      ["тип: мембранная",  "дизайн: классическая", "тип подключения: проводная"],
      3955, 4,
      "https://kaspi.kz/shop/p/smartbuy-sbk-333u-w-belyi-100873525/?c=750000000#!/item",
      ["smartbuy-one-sbk-belyj-1.jpeg", "smartbuy-one-sbk-belyj-2.jpeg", "smartbuy-one-sbk-belyj-3.jpeg"],
      new Category("Keyboards"),342
    ),
    new Product(
      "Клавиатура Ajazz STK61 белый",
      ["тип: механическая", "дизайн: эргономическая", "тип механических клавиш: GX Red"],
      20400, 5,
      "https://kaspi.kz/shop/p/ajazz-stk61-belyi-106268306/?c=750000000#!/item",
      ["ajazz-stk61-belyj-1.jpeg", "ajazz-stk61-belyj-2.jpeg",  "ajazz-stk61-belyj-3.jpeg"],
      new Category("Keyboards"),245
    ),
    new Product(
      "Клавиатура Rii mini i8 черный",
      [ "тип: оптическая", "дизайн: мультимедийная", "тип подключения: беспроводная"],
      2289, 4,
      "https://kaspi.kz/shop/p/rii-mini-i8-chernyi-101174843/?c=750000000#!/item",
      ["rii-mini-i8-cerny-1.jpeg", "rii-mini-i8-cerny-2.jpeg", "rii-mini-i8-cerny-3.jpeg"],
      new Category("Keyboards"),521
    )
  ]
  ngOnInit(): void {}
}
