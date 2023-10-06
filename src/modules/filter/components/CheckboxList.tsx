import React, { useCallback } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import { css } from '../../../consts';
import { CheckboxItem } from '../ui/CheckboxItem';

export const CheckboxList = ({ items, selectedItems, onToggleItem }) => {
  const dispatch = useDispatch();

  const renderItem = useCallback(
    ({ item }) => {
      const isSelected = selectedItems.includes(item);
      return (
        <CheckboxItem
          item={item}
          isSelected={isSelected}
          onToggle={() => dispatch(onToggleItem(item))}
        />
      );
    },
    [selectedItems, dispatch, onToggleItem]
  );

  return (
    <FlatList
      data={items}
      renderItem={renderItem}
      keyExtractor={(item) => item}
      extraData={selectedItems}
      style={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: css.padding,
    paddingVertical: css.padding,
  },
});
