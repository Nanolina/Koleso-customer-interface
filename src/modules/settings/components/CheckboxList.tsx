import React, { useCallback } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { resetValue, setValue } from '../../../../redux/slices/settingsSlice';
import { colors } from '../../../consts';
import { Button } from '../../../ui/Button';
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
          text={item}
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
        <Button
          text="Reset"
          onPress={() => dispatch(resetValue({ key: 'gender' }))}
          width="50%"
          textColor={colors.main}
          backgroundColor={colors.white}
          isBold={false}
          hasShadow
        />
      </View>
      {items.map(renderItem)}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'flex-end',
    padding: 8,
  },
});
