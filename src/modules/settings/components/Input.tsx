import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../redux/rootReducer';
import { ISettingsState } from '../../../../redux/slices/settingsSlice';
import { TextWithInput } from '../../../components/TextWithInput';
import { getAutoComplete, getDataForInput } from '../functions';
import { IInputProps } from '../types';

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
    <View style={styles.container}>
      <TextWithInput
        value={value}
        onChangeText={onChangeText}
        inputMode={inputMode}
        autoComplete={autoComplete}
      />
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    padding: 5,
  },
});
