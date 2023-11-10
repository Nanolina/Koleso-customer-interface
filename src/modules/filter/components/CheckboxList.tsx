import React, { useCallback } from 'react';
import { View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../../redux/rootReducer';
import { CheckboxItem } from '../../../ui/CheckboxItem';
import { getItems } from '../functions';
import { ICheckboxListProps } from '../types';
import { Buttons } from './Buttons';

export const CheckboxList: React.FC<ICheckboxListProps> = React.memo(
  ({ title, items }) => {
    const dispatch = useDispatch();
    const {
      colors,
      genders,
      sizes,
      categories,
      brands,
      sellers,
      compositions,
      seasons,
    } = useSelector((state: RootState) => state.filter);

    const { selectedItems, onToggleItem, resetAll, selectAll } = getItems(
      title,
      colors,
      genders,
      sizes,
      categories,
      brands,
      sellers,
      compositions,
      seasons
    );

    const renderItem = useCallback(
      (item) => {
        const isSelected = selectedItems.includes(item);

        return (
          <CheckboxItem
            key={item}
            text={item}
            isSelected={isSelected}
            onToggle={() => dispatch(onToggleItem(item))}
          />
        );
      },
      [selectedItems, dispatch, onToggleItem]
    );

    return (
      <View>
        <Buttons
          items={items}
          selectedItems={selectedItems}
          resetAll={resetAll}
          selectAll={selectAll}
        />
        {items.map(renderItem)}
      </View>
    );
  }
);
