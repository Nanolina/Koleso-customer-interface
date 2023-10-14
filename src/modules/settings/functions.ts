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

export const formatPhone = (phone) => {
  if (!phone || phone.length < 3) return phone;

  const start = phone.substring(0, 2);
  const end = phone.substring(phone.length - 2);
  const middleStars = new Array(phone.length - 4).fill('*').join('');

  return start + middleStars + end;
};
