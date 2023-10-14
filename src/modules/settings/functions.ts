import { useDispatch } from 'react-redux';
import { addName, addPhone } from '../../../redux/slices/settingsSlice';

export const getDataForInput = (title, name, phone) => {
  const dispatch = useDispatch();

  let value;
  let onChangeText;
  let inputMode = 'text';

  if (title === 'Name') {
    value = name;
    onChangeText = (value) => dispatch(addName(value));
  }

  if (title === 'Phone') {
    value = phone;
    onChangeText = (value) => dispatch(addPhone(value));
    inputMode = 'tel';
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
