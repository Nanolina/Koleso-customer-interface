import { IAddress } from './src/modules/address';
import { IFinanceProps } from './src/modules/finances/types';
import { INotificationProps } from './src/modules/notifications/types';
import { IItemProps } from './src/types';

export const productCards: IItemProps[] = [
  {
    id: '1',
    image: 'https://ae04.alicdn.com/kf/H07516981ed7d4b5bb3cc6a39ecea7115P.jpg',
    price: 20,
    oldPrice: 40,
    seller: 'Leoe',
    title: 'Pantsuit',
    color: 'Beige',
    selectedSize: 35,
    composition: 'Cotton',
    gender: 'Female',
    quantity: 1,
    possibleSizes: [35, 36, 37, 38, 39, 40, 41],
    missingSizes: [38, 39, 41],
    description: `Pantsuit - An Elegant Choice for the Modern Woman
Mesmerizing and fashionable, our pantsuit is the perfect addition to your closet! Consisting of pants and jacket, this stylish set is designed to make you feel confident and comfortable in any situation, whether it's a business meeting or an after-work party.
Features:
Top quality material: We used only the best fabrics to ensure durability and wearing comfort. The fabric is breathable, lightweight and pleasant to the body.
Perfect fit: Thanks to the carefully designed cut, our pantsuit fits perfectly, emphasizing your strengths and hiding flaws.
Versatile: Perfect for work, presentations, formal events or romantic dates.
Fashionable details: Modern design elements such as slim fit pants, neat lapels and elegant buttons make this pantsuit a true work of art.
Don't miss the opportunity to add this gorgeous pantsuit to your closet! It will not only emphasize your sense of style, but will also enhance your confident and modern radiance. Show the world your uniqueness and professionalism with our pantsuit!`,
    return: {
      number: '127033693-R4',
      date: '12.05.2023',
      statusMoney: 'not_sent',
    },
  },
  {
    id: '2',
    image: 'https://13not.ru/img/letnie-platya-s-volanami-na-plechah.jpg',
    price: 30,
    oldPrice: 60,
    seller: 'Sldek',
    title: 'Dress',
    color: 'Beige',
    gender: 'Male',
    quantity: 1,
    return: {
      number: '137033693-R2',
      date: '12.05.2023',
      statusMoney: 'sent',
    },
  },
  {
    id: '3',
    image:
      'https://marketpro-demo.ru/upload/products_pictures_demo/c7b/b9dp2462keos5hlnrqo4zqavaba3ircv/fg6vrukxrq1.jpg',
    price: 34,
    oldPrice: 67,
    seller: 'Hdadn',
    title: 'Laptop',
    color: 'Blue',
    gender: 'Female',
    quantity: 1,
    delivery: {
      number: '0137033693-0022',
      date: '02.03.2023',
    },
  },
  {
    id: '4',
    image: 'https://13not.ru/img/letnie-platya-s-volanami-na-plechah.jpg',
    price: 29,
    oldPrice: 65,
    seller: 'Eneda',
    title: 'Phone',
    color: 'Red',
    gender: 'Female',
    quantity: 1,
    delivery: {
      number: '0234033693-0034',
      date: '12.01.2022',
    },
  },
];

export const queries: string[] = ['Apple', 'Banana', 'Cherry'];

export const finances: IFinanceProps[] = [
  {
    id: 'b16e5377-ad5e-481c-b115-05d45d13cbc0',
    type: 'payment',
    orderNumber: '0135033693-0023',
    paymentAmount: 50,
    date: '27.09.2023',
    time: '23:38',
    status: 'successful',
  },
  {
    id: '847319b3-1a7b-49c6-9017-ee7667744ff0',
    type: 'return',
    orderNumber: '0256033693-0023',
    paymentAmount: 124,
    date: '02.10.2023',
    time: '10:40',
    status: 'rejected',
  },
];

export const notifications: INotificationProps[] = [
  {
    id: '1',
    status: 'sent',
    date: '02.10.2023',
    time: '10:40',
    amount: 59,
    transactionNumber: '453628173',
  },
];

export const savedAddresses: IAddress[] = [
  {
    id: '1',
    address: 'Piazza Gentile 58, Appartamento 88, Borgo Laerte, CT 00986',
  },
  {
    id: '2',
    address:
      'Puerta 594 Masía Homero Estrada, 17 Esc. 517, La Línea de la Concepción, Ast 28576',
  },
];
