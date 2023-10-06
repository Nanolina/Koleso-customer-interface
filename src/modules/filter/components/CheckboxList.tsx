import React, { useCallback } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import { css } from '../../../consts';
import { CheckboxItem } from '../ui/CheckboxItem';

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
    <ScrollView style={styles.container}>{items.map(renderItem)}</ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: css.padding,
    paddingVertical: css.padding,
  },
});
