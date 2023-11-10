import { useDispatch } from 'react-redux';
import { setValue } from '../../../redux/slices/settingsSlice';
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
  let inputMode: string = 'text';

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
