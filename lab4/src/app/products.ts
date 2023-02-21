export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  Image: string;
  rating: number;
  url: string;
}

export const products = [
  {
    id: 1,
    name: 'Apple iPhone 14 Pro 128Gb фиолетовый',
    price: 375890,
    description: 'Новый телефон.',
    rating: 4.8,
    url: 'https://kaspi.kz/shop/p/apple-iphone-14-pro-128gb-fioletovyi-106363283/',
    Image: "https://resources.cdn-kaspi.kz/medias/sys_master/images/images/h1d/h69/62948389683230/apple-iphone-14-pro-128gb-fioletovyj-106363283-1.jpg"
  },
  {
    id: 2,
    name: 'Apple iPhone 11 Slim Box 128Gb черный',
    price: 293753,
    description: 'Устаревший телефон.',
    rating: 4.6,
    url: 'https://kaspi.kz/shop/p/apple-iphone-11-128gb-slim-box-chernyi-100692388/',
    Image: "https://resources.cdn-kaspi.kz/medias/sys_master/images/images/h8b/h66/31489166606366/apple-iphone-11-128gb-slim-box-cernyj-100692388-1-Container.jpg"
  },
  {
    id: 3,
    name: 'Apple iPhone 14 Pro 256Gb фиолетовый',
    price: 590500,
    description: 'Новый телефон.',
    rating: 4.4,
    url: 'https://kaspi.kz/shop/p/apple-iphone-14-pro-256gb-fioletovyi-106363319/',
    Image: "https://resources.cdn-kaspi.kz/medias/sys_master/images/images/h82/h83/62948396662814/apple-iphone-14-pro-128gb-fioletovyj-106363319-1.jpg"
  },
  {
    id: 4,
    name: 'Apple iPhone 11 128Gb Slim Box белый',
    price: 298780,
    description: 'Устаревший телефон.',
    rating: 3.7,
    url: 'https://kaspi.kz/shop/p/apple-iphone-11-128gb-slim-box-belyi-100692385/',
    Image: "https://resources.cdn-kaspi.kz/medias/sys_master/images/images/hd6/hf8/33208262066206/apple-iphone-11-128gb-slim-box-belyj-100692385-1-Container.jpg"
  },
  {
    id: 5,
    name: 'Apple MacBook Air 13 MGN63 серый',
    price: 494900,
    description: 'Суперлегкий ноутбук.',
    rating: 2.8,
    url: 'https://kaspi.kz/shop/p/apple-macbook-air-13-mgn63-seryi-100797845/',
    Image: "https://resources.cdn-kaspi.kz/medias/sys_master/images/images/h67/h95/33125682380830/apple-macbook-air-2020-13-3-mgn63-seryj-100797845-1-Container.jpg"
  },
  {
    id: 6,
    name: 'Apple MacBook Air 13 MLY33 черный',
    price: 628300,
    description: 'Суперлегкий ноутбук.',
    rating: 4.4,
    url: 'https://kaspi.kz/shop/p/apple-macbook-air-13-mly33-chernyi-105933768/',
    Image: "https://resources.cdn-kaspi.kz/medias/sys_master/images/images/h1f/h2b/52679174291486/apple-macbook-air-13-mly33-chernyi-105933768-1.jpg"
  },
  {
  id: 7,
    name: 'Apple iPad 2021 10.2 64Gb Wi-Fi серый',
    price: 159990,
    description: 'Мега большой телефон.',
    rating: 4.3,
    url: 'https://kaspi.kz/shop/p/apple-ipad-2021-10-2-64gb-wi-fi-seryi-102301598/',
    Image: "https://resources.cdn-kaspi.kz/medias/sys_master/images/images/h8e/h99/48110926594078/apple-ipad-2021-wi-fi-64gb-seryj-102301598-1-Container.jpg"
  },
  {
    id: 8,
    name: 'Apple AirPods Pro 2nd generation белый',
    price: 119680,
    description: 'Музыка в ваших ушах. Теперь без провода!',
    rating: 4.9,
    url: '',
    Image: "https://resources.cdn-kaspi.kz/medias/sys_master/images/images/h39/hbd/62281477128222/apple-airpods-pro-2nd-generation-belyj-106362968-1.jpg"
  },  
  {
    id: 9,
    name: 'Apple EarPods Lightning белый',
    price: 12948,
    description: 'Музыка в ваших ушах.',
    rating: 5.0,
    url: 'https://kaspi.kz/shop/p/apple-airpods-pro-2nd-generation-belyi-106362968/',
    Image: 'https://resources.cdn-kaspi.kz/img/m/p/hff/h5c/63764029243422.jpg?format=preview-medium'
  },
  {
    id: 10,
    name: 'Apple Watch Series 8 45 мм Aluminum черный',
    price: 225000,
    description: "Браслетик на руку.",
    rating: 3.9,
    url: 'https://kaspi.kz/shop/p/apple-watch-series-8-45-mm-aluminum-chernyi-106362847/',
    Image: 'https://resources.cdn-kaspi.kz/img/m/p/h5a/h17/64401042472990.jpg?format=preview-medium'
  }
];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/