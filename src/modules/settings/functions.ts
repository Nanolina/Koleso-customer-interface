import { DateTime } from 'luxon';
import { useDispatch } from 'react-redux';
import { setValue } from '../../../redux/slices/settingsSlice';

export const getDataForInput = (title, name, phone, email) => {
  const dispatch = useDispatch();

  let value;
  let onChangeText;
  let inputMode = 'text';

  if (title === 'Name') {
    value = name;
    onChangeText = (value) => dispatch(setValue({ value, key: 'name' }));
  }

  if (title === 'Phone') {
    value = phone;
    onChangeText = (value) => dispatch(setValue({ value, key: 'phone' }));
    inputMode = 'tel';
  }

  if (title === 'Email') {
    value = email;
    onChangeText = (value) => dispatch(setValue({ value, key: 'email' }));
  }

  return {
    value,
    onChangeText,
    inputMode,
  };
};

const formatPhone = (phone) => {
  if (!phone || phone.length < 3) return phone;

  const start = phone.substring(0, 2);
  const end = phone.substring(phone.length - 2);
  const middleStarsLength = Math.max(0, phone.length - 4);
  const middleStars = new Array(middleStarsLength).fill('*').join('');

  return start + middleStars + end;
};

export const formatBirthday = (birthday) => {
  const dt = DateTime.fromISO(birthday);
  return dt.toFormat('dd.MM.yyyy');
};

export const getDisplayItem = (title, selectedItem) => {
  if (title === 'Phone') {
    return formatPhone(selectedItem);
  }

  if (title === 'Date of birth' && selectedItem) {
    return formatBirthday(selectedItem);
  }

  return selectedItem;
};

export const getAutoComplete = (title) => {
  let autoComplete = 'off';

  if (title === 'Name') {
    autoComplete = 'name';
  }

  if (title === 'Email') {
    autoComplete = 'email';
  }

  if (title === 'Phone') {
    autoComplete = 'tel';
  }

  return autoComplete;
};
