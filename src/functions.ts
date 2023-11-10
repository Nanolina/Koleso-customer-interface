import { DateTime } from 'luxon';

const formatPhone = (phone: string) => {
  if (!phone || phone.length < 3) return phone;

  const start = phone.substring(0, 2);
  const end = phone.substring(phone.length - 2);
  const middleStarsLength = Math.max(0, phone.length - 4);
  const middleStars = new Array(middleStarsLength).fill('*').join('');

  return start + middleStars + end;
};

const formatBirthday = (birthday: string) => {
  const dt = DateTime.fromISO(birthday);
  return dt.toFormat('dd.MM.yyyy');
};

export const getDisplayItem = (title: string, selectedItem: string) => {
  if (title === 'Phone') {
    return formatPhone(selectedItem);
  }

  if (title === 'Date of birth' && selectedItem) {
    return formatBirthday(selectedItem);
  }

  return selectedItem;
};
