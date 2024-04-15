import { DateTime } from 'luxon';
import { InputModeOptions } from 'react-native';
import { useDispatch } from 'react-redux';
import i18n from '../../i18n/i18n';
import { setValue } from '../../redux/slices/settingsSlice';
import { IGetDataForInput } from './types';

export const getDataForInput = ({
  title,
  name,
  phone,
  email,
}: IGetDataForInput) => {
  const dispatch = useDispatch();

  let value: string;
  let onChangeText: (value: string) => void;
  let inputMode: InputModeOptions = 'text';

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
    inputMode = 'email';
  }

  return {
    value,
    onChangeText,
    inputMode,
  };
};

export const getAutoComplete = (title: string): string => {
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

const formatPhone = (phone: string) => {
  if (!phone || phone.length < 3) return phone;

  const start = phone.substring(0, 2);
  const end = phone.substring(phone.length - 2);
  const middleStarsLength = Math.max(0, phone.length - 4);
  const middleStars = new Array(middleStarsLength).fill('*').join('');

  return start + middleStars + end;
};

const formatEmail = (email) => {
  if (!email) return email;

  const atIndex = email.lastIndexOf('@');
  const dotIndex = email.lastIndexOf('.');
  if (dotIndex > atIndex) {
    const start = email.substring(0, 5);
    const domain = email.substring(dotIndex);
    return `${start}***${domain}`;
  }
  return email;
};

const formatBirthday = (birthday: string) => {
  const dt = DateTime.fromISO(birthday);
  return dt.toFormat('dd.MM.yyyy');
};

export const getDisplayItem = (title: string, selectedItem: string) => {
  if (title === 'Email') {
    return formatEmail(selectedItem);
  }

  if (title === 'Phone') {
    return formatPhone(selectedItem);
  }

  if (title === 'Date of birth' && selectedItem) {
    return formatBirthday(selectedItem);
  }

  if (title === 'Gender') {
    return i18n.t(`settings.${selectedItem.toLowerCase()}`);
  }

  if (title === 'Language') {
    return i18n.t(selectedItem);
  }

  return selectedItem;
};
