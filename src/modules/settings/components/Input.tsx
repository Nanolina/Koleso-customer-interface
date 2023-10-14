import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import { TextWithInput } from '../../../components/TextWithInput';
import { css } from '../../../consts';
import { getDataForInput } from '../functions';

export const Input = ({ title }) => {
  const { name, phone } = useSelector((state: any) => state.settings);

  const { value, onChangeText, inputMode } = getDataForInput(
    title,
    name,
    phone
  );

  return (
    <ScrollView style={styles.container}>
      <TextWithInput
        value={value}
        onChangeText={onChangeText}
        inputMode={inputMode}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: css.padding,
    paddingVertical: css.padding,
  },
});
