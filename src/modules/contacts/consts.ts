export interface IContactProps {
  id: string;
  text: string;
  link: string;
  image: number;
};

export const contacts = [
  {
    id: 'b27e5377-ad5e-481c-b115-05d45d13cbc0',
    text: 'koleso@gmail.com',
    link: 'www.gmail.com',
    image: require('../../assets/email.png'),
  },
  {
    id: '446319b3-1a7b-49c6-9017-ee7667744ff0',
    text: '+7-999-999-99-99',
    link: 'www.telegram.com',
    image: require('../../assets/telegram.png'),
  },
  {
    id: '346218b3-1a7b-49c6-9017-ee7667744ff0',
    text: '+7-999-999-99-99',
    link: 'www.whatsApp.com',
    image: require('../../assets/whatsApp.png'),
  },
];
