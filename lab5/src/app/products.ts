export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  Image: string;
  rating: number;
  url: string;
  category: string;
  likes: number;
}

export const products = [
  {
    id: 1,
    name: 'Apple iPhone 14 Pro 128Gb фиолетовый',
    price: 375890,
    description: 'Новый телефон.',
    rating: 4.8,
    category:'SmartPhones',
    likes: 0,
    url: 'https://kaspi.kz/shop/p/apple-iphone-14-pro-128gb-fioletovyi-106363283/',
    Image: "https://resources.cdn-kaspi.kz/medias/sys_master/images/images/h1d/h69/62948389683230/apple-iphone-14-pro-128gb-fioletovyj-106363283-1.jpg"
  },
  {
    id: 2,
    name: 'Apple iPhone 11 Slim Box 128Gb черный',
    price: 293753,
    description: 'Устаревший телефон.',
    rating: 4.6,
    category:'SmartPhones',
    likes: 0,
    url: 'https://kaspi.kz/shop/p/apple-iphone-11-128gb-slim-box-chernyi-100692388/',
    Image: "https://resources.cdn-kaspi.kz/medias/sys_master/images/images/h8b/h66/31489166606366/apple-iphone-11-128gb-slim-box-cernyj-100692388-1-Container.jpg"
  },
  {
    id: 3,
    name: 'Apple iPhone 14 Pro 256Gb фиолетовый',
    price: 590500,
    description: 'Новый телефон.',
    rating: 4.4,
    category:'SmartPhones',
    likes: 0,
    url: 'https://kaspi.kz/shop/p/apple-iphone-14-pro-256gb-fioletovyi-106363319/',
    Image: "https://resources.cdn-kaspi.kz/medias/sys_master/images/images/h82/h83/62948396662814/apple-iphone-14-pro-128gb-fioletovyj-106363319-1.jpg"
  },
  {
    id: 4,
    name: 'Apple iPhone 11 128Gb Slim Box белый',
    price: 298780,
    description: 'Устаревший телефон.',
    rating: 3.7,
    category:'SmartPhones',
    likes: 0,
    url: 'https://kaspi.kz/shop/p/apple-iphone-11-128gb-slim-box-belyi-100692385/',
    Image: "https://resources.cdn-kaspi.kz/medias/sys_master/images/images/hd6/hf8/33208262066206/apple-iphone-11-128gb-slim-box-belyj-100692385-1-Container.jpg"
  },
  {
    id: 5,
    name: 'Apple MacBook Air 13 MGN63 серый',
    price: 494900,
    description: 'Суперлегкий ноутбук.',
    rating: 2.8,
    category:'NoteBooks',
    likes: 0,
    url: 'https://kaspi.kz/shop/p/apple-macbook-air-13-mgn63-seryi-100797845/',
    Image: "https://resources.cdn-kaspi.kz/medias/sys_master/images/images/h67/h95/33125682380830/apple-macbook-air-2020-13-3-mgn63-seryj-100797845-1-Container.jpg"
  },
  {
    id: 6,
    name: 'Apple MacBook Air 13 MLY33 черный',
    price: 628300,
    description: 'Суперлегкий ноутбук.',
    rating: 4.4,
    category:'NoteBooks',
    likes: 0,
    url: 'https://kaspi.kz/shop/p/apple-macbook-air-13-mly33-chernyi-105933768/',
    Image: "https://resources.cdn-kaspi.kz/medias/sys_master/images/images/h1f/h2b/52679174291486/apple-macbook-air-13-mly33-chernyi-105933768-1.jpg"
  },
  {
  id: 7,
    name: 'Apple iPad 2021 10.2 64Gb Wi-Fi серый',
    price: 159990,
    description: 'Мега большой телефон.',
    rating: 4.3,
    category:'Tabs',
    likes: 0,
    url: 'https://kaspi.kz/shop/p/apple-ipad-2021-10-2-64gb-wi-fi-seryi-102301598/',
    Image: "https://resources.cdn-kaspi.kz/medias/sys_master/images/images/h8e/h99/48110926594078/apple-ipad-2021-wi-fi-64gb-seryj-102301598-1-Container.jpg"
  },
  {
    id: 8,
    name: 'Apple AirPods Pro 2nd generation белый',
    price: 119680,
    description: 'Музыка в ваших ушах. Теперь без провода!',
    rating: 4.9,
    category:'Accessories',
    likes: 0,
    url: 'https://kaspi.kz/shop/p/apple-airpods-pro-2nd-generation-belyi-106362968/',
    Image: "https://resources.cdn-kaspi.kz/medias/sys_master/images/images/h39/hbd/62281477128222/apple-airpods-pro-2nd-generation-belyj-106362968-1.jpg"
  },  
  {
    id: 9,
    name: 'Apple EarPods Lightning белый',
    price: 12948,
    description: 'Музыка в ваших ушах.',
    rating: 5.0,
    category:'Accessories',
    likes: 0,
    url: 'https://kaspi.kz/shop/p/apple-airpods-pro-2nd-generation-belyi-106362968/',
    Image: 'https://resources.cdn-kaspi.kz/img/m/p/hff/h5c/63764029243422.jpg?format=preview-medium'
  },
  {
    id: 10,
    name: 'Apple Watch Series 8 45 мм Aluminum черный',
    price: 225000,
    description: "Браслетик на руку.",
    rating: 3.9,
    category:'Accessories',
    likes: 0,
    url: 'https://kaspi.kz/shop/p/apple-watch-series-8-45-mm-aluminum-chernyi-106362847/',
    Image: 'https://resources.cdn-kaspi.kz/img/m/p/h5a/h17/64401042472990.jpg?format=preview-medium'
  },
  {
    id: 11,
    name: 'Apple iPhone SE 2020 64Gb Slim Box красный',
    price: 235448,
    description: "Маленький телефон.",
    rating: 3.7,
    category:'SmartPhones',
    likes: 0,
    url: 'https://kaspi.kz/shop/p/apple-iphone-se-2020-64gb-slim-box-krasnyi-100692722/',
    Image: 'https://resources.cdn-kaspi.kz/medias/sys_master/images/images/ha9/hc4/33080091475998/apple-iphone-se-2020-64gb-slim-box-krasnyj-100692722-1-Container.jpg'
  },
  {
    id: 12,
    name: 'Samsung Galaxy Tab A8 SM-X205N 10.5 дюймов 4 Гб/128 Гб',
    price: 113340,
    description: "Планшет.",
    rating: 2.5,
    category:'Tabs',
    likes: 0,
    url: 'https://kaspi.kz/shop/p/samsung-galaxy-tab-a8-sm-x205n-10-5-djuimov-4-gb-128-gb-seryi-103450834',
    Image: 'https://resources.cdn-kaspi.kz/medias/sys_master/images/images/h06/h62/48290724839454/samsung-galaxy-tab-a8-10-5-dujmov-4-gb-64-gb-seryj-103450834-1.jpg'
  },
  {
    id: 13,
    name: 'Apple iPad Pro 2022 11 128GB Wi-Fi серый',
    price: 299900,
    description: "Планшет от Яблока.",
    rating: 4.6,
    category:'Tabs',
    likes: 0,
    url: 'https://kaspi.kz/shop/p/apple-ipad-pro-2022-11-128gb-wi-fi-seryi-107276534/',
    Image: 'https://resources.cdn-kaspi.kz/medias/sys_master/images/images/h06/h7c/64895797788702/apple-ipad-pro-2022-11-128gb-wi-fi-seryi-107276534-1.jpg'
  },
  {
    id: 14,
    name: 'Apple iPad Air 2022 10.9 64Gb Wi-Fi серый',
    price: 302900,
    description: "Планшет от Яблока.",
    rating: 4.7,
    category:'Tabs',
    likes: 0,
    url: 'https://kaspi.kz/shop/p/apple-ipad-air-2022-10-9-64gb-wi-fi-seryi-104235453/',
    Image: 'https://resources.cdn-kaspi.kz/medias/sys_master/images/images/h89/he1/49580851658782/apple-ipad-air-5-2022-wi-fi-mm9c3rk-a-10-9-dujmov-8-gb-64-gb-fioletovyj-104235453-1.jpg'
  },
  {
    id: 15,
    name: 'Apple iPad 2022 10.9 Wi-Fi 64Gb синий',
    price: 259136,
    description: "Планшет от Яблока.",
    rating: 5.0,
    category:'Tabs',
    likes: 0,
    url: 'https://kaspi.kz/shop/p/apple-ipad-2022-10-9-wi-fi-64gb-sinii-107266637/',
    Image: 'https://resources.cdn-kaspi.kz/img/m/p/h42/he7/64867890528286.jpg?format=preview-medium'
  },
  {
    id: 16,
    name: 'Ноутбук ASUS TUF Gaming A15 FA506IHRB-HN084 90NR07G7-M008C0 черный',
    price: 349930,
    description: "Ноутбук.",
    rating: 5.0,
    category:'NoteBooks',
    likes: 0,
    url: 'https://kaspi.kz/shop/p/asus-tuf-gaming-a15-fa506ihrb-hn084-90nr07g7-m008c0-chernyi-106255184/',
    Image: 'https://resources.cdn-kaspi.kz/medias/sys_master/images/images/ha2/he7/62100002570270/asus-tuf-gaming-a15-fa506ihrb-hn084-90nr07g7-m008c0-cernyj-106255184-1.jpg'
  },
  {
    id: 17,
    name: 'ASUS X515EA-BQ3269 90NB0TY1-M038L0 серый',
    price: 179990,
    description: "Ноутбук.",
    rating: 3.5,
    category:'NoteBooks',
    likes: 0,
    url: 'https://kaspi.kz/shop/p/asus-x515ea-bq3269-90nb0ty1-m038l0-seryi-107847924/',
    Image: 'https://resources.cdn-kaspi.kz/medias/sys_master/images/images/hdb/he3/66428285222942/asus-x515ea-bq3269-90nb0ty1-m038l0-seryi-107847924-1.jpg'
  }, 
  {
    id: 18,
    name: 'Acer Nitro 5 AN515-57 NH.QEKER.004 черный',
    price: 389800,
    description: "Ноутбук.",
    rating: 3.7,
    category:'NoteBooks',
    likes: 0,
    url: 'https://kaspi.kz/shop/p/acer-nitro-5-an515-57-nh-qeker-004-chernyi-108194028/',
    Image: 'https://resources.cdn-kaspi.kz/medias/sys_master/images/images/h9b/h1b/67236399120414/acer-nitro-5-an515-57-nh-qeker-004-chernyi-108194028-1.jpg'
  },
  {
    id: 19,
    name: 'Smart Case для Apple iPhone 13 прозрачный',
    price: 231,
    description: "Чехол.",
    rating: 2.3,
    category:'Accessories',
    likes: 0,
    url: 'https://kaspi.kz/shop/p/smart-case-dlja-apple-iphone-13-prozrachnyi-106185651/',
    Image: 'https://resources.cdn-kaspi.kz/medias/sys_master/images/images/h92/hb3/61970077450270/prozracnyj-cehol-na-iphone-13-106185651-1.jpg'
  },
  {
    id: 20,
    name: 'OEM для Apple iPhone 12 прозрачный',
    price: 291,
    description: "Чехол.",
    rating: 1.2,
    category:'Accessories',
    likes: 0,
    url: 'https://kaspi.kz/shop/p/oem-dlja-apple-iphone-12-prozrachnyi-106589878/',
    Image: 'https://resources.cdn-kaspi.kz/medias/sys_master/images/images/hf5/h54/62719011356702/oem-dlya-apple-iphone-12-prozrachnyi-106589878-1.jpg'
  }

];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/