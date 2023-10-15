import React from 'react';
import { ScrollView } from 'react-native';
import { useSelector } from 'react-redux';
import { TextWithInput } from '../../../components/TextWithInput';
import { getAutoComplete, getDataForInput } from '../functions';

export const Input = ({ title }) => {
  const { name, phone, email } = useSelector((state: any) => state.settings);

  const { value, onChangeText, inputMode } = getDataForInput(
    title,
    name,
    phone,
    email
  );

  const autoComplete = getAutoComplete(title);

  return (
    <ScrollView>
      <TextWithInput
        value={value}
        onChangeText={onChangeText}
        inputMode={inputMode}
        autoComplete={autoComplete}
      />
    </ScrollView>
  );
};
