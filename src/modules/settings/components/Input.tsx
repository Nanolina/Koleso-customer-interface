import React from 'react';
import { View } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../redux/rootReducer';
import { TextWithInput } from '../../../components/TextWithInput';
import { getAutoComplete, getDataForInput } from '../functions';
import { IInputProps, ISettingsState } from '../types';

export const Input: React.FC<IInputProps> = React.memo(({ title }) => {
  const { name, phone, email } = useSelector(
    (state: RootState) => state.settings as ISettingsState
  );

  const { value, onChangeText, inputMode } = getDataForInput({
    title,
    name,
    phone,
    email,
  });

  const autoComplete = getAutoComplete(title);

  return (
    <View>
      <TextWithInput
        value={value}
        onChangeText={onChangeText}
        inputMode={inputMode}
        autoComplete={autoComplete}
      />
    </View>
  );
});
