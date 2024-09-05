// กำหนดประเภทข้อมูลของสินค้าทุกชิ้น
// ตัวอย่างของสินค้า
export interface Item {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
}

// ข้อมูลสินค้า
export const items: Item[] = [
  {
    id: 1,
    name: 'Book',
    price: 10.99,
    imgUrl: '/imgs/book.jpg'
  },
  {
    id: 2,
    name: 'Computer',
    price: 1199,
    imgUrl: '/imgs/computer.jpg'
  },
  {
    id: 3,
    name: 'Banana',
    price: 1.05,
    imgUrl: '/imgs/banana.jpg'
  },
  {
    id: 4,
    name: 'Car',
    price: 14000,
    imgUrl: '/imgs/car.jpg'
  },
  {
    id: 5,
    name: 'Phone',
    price: 1200,
    imgUrl: '/imgs/phone.jpg'
  },
  {
    id: 6,
    name: 'Pen',
    price: 5,
    imgUrl: '/imgs/pen.jpg'
  }
];

  