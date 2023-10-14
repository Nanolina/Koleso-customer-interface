import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { addName } from '../../../../redux/slices/settingsSlice';
import { TextWithInput } from '../../../components/TextWithInput';
import { css } from '../../../consts';

export const Input = () => {
  const dispatch = useDispatch();
  const { name } = useSelector((state: any) => state.settings);

  return (
    <ScrollView style={styles.container}>
      <TextWithInput
        value={name}
        onChangeText={(value) => dispatch(addName(value))}
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
