import React, { useCallback } from 'react';
import { ScrollView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { CheckboxItem } from '../../../ui/CheckboxItem';
import { getItems } from '../functions';
import { Buttons } from './Buttons';

export const CheckboxList = ({ title, items }) => {
  const dispatch = useDispatch();
  const { colors, genders, sizes, categories, brands, sellers, compositions } =
    useSelector((state: any) => state.filter);

  const { selectedItems, onToggleItem, resetAll, selectAll } = getItems(
    title,
    colors,
    genders,
    sizes,
    categories,
    brands,
    sellers,
    compositions
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
    <ScrollView>
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
