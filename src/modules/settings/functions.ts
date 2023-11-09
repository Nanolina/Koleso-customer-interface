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
