import React, { useCallback } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { resetValue, setValue } from '../../../../redux/slices/settingsSlice';
import { css } from '../../../consts';
import { ButtonGradient } from '../../../ui/ButtonGradient';
import { CheckboxItem } from '../../../ui/CheckboxItem';

export const CheckboxList = ({ items }) => {
  const dispatch = useDispatch();
  const { gender } = useSelector((state: any) => state.settings);

  const renderItem = useCallback(
    (item) => {
      const isSelected = gender === item;

      return (
        <CheckboxItem
          key={item}
          item={item}
          isSelected={isSelected}
          onToggle={() => dispatch(setValue({ key: 'gender', value: item }))}
        />
      );
    },
    [gender, dispatch, setValue]
  );

  return (
    <ScrollView>
      <View style={styles.button}>
        <ButtonGradient
          text="Reset"
          onPress={() => dispatch(resetValue({ key: 'gender' }))}
        />
      </View>
      {items.map(renderItem)}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'flex-end',
  },
});
