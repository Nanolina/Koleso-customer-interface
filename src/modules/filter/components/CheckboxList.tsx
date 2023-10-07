import React, { useCallback } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import {
  resetAllColors,
  selectAllColors,
} from '../../../../redux/slices/filterSlice';
import { css } from '../../../consts';
import { CheckboxItem } from '../ui/CheckboxItem';
import { Buttons } from './Buttons';

export const CheckboxList = ({ items, selectedItems, onToggleItem }) => {
  const dispatch = useDispatch();

  const renderItem = useCallback(
    (item) => {
      const isSelected = selectedItems.includes(item);

      return (
        <CheckboxItem
          key={item}
          item={item}
          isSelected={isSelected}
          onToggle={() => dispatch(onToggleItem(item))}
        />
      );
    },
    [selectedItems, dispatch, onToggleItem]
  );

  return (
    <ScrollView style={styles.container}>
      <Buttons
        items={items}
        selectedItems={selectedItems}
        resetAll={resetAllColors}
        selectAll={selectAllColors}
      />
      {items.map(renderItem)}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: css.padding,
    paddingVertical: css.padding,
  },
});
