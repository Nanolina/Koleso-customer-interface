import React, { useCallback } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { css } from '../../../consts';
import { getItems } from '../functions';
import { CheckboxItem } from '../ui/CheckboxItem';
import { Buttons } from './Buttons';

export const CheckboxList = ({ title, items }) => {
  const dispatch = useDispatch();
  const { colors, genders, sizes } = useSelector((state: any) => state.filter);

  const { selectedItems, onToggleItem, resetAll, selectAll } = getItems(
    title,
    colors,
    genders,
    sizes
  );

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
        resetAll={resetAll}
        selectAll={selectAll}
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
