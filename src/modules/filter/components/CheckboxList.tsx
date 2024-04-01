import React, { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { StyleSheet, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { IRootState } from '../../../redux/rootReducer';
import { CheckboxItem } from '../../../ui/CheckboxItem';
import { getItems, isNeedTranslation } from '../functions';
import { ICheckboxListProps } from '../types';
import { Buttons } from './Buttons';

export const CheckboxList: React.FC<ICheckboxListProps> = React.memo(
  ({ title, items }) => {
    const { t } = useTranslation();

    const dispatch = useDispatch();

    const { colors, genders, sizes, brands, sellers, compositions, seasons } =
      useSelector((state: IRootState) => state.filter);

    const { selectedItems, onToggleItem, resetAll, selectAll } = getItems(
      title,
      colors,
      genders,
      sizes,
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
            text={
              isNeedTranslation(title) ? t(`filter.${title}.${item}`) : item
            }
            isSelected={isSelected}
            onToggle={() => dispatch(onToggleItem(item))}
          />
        );
      },
      [selectedItems, dispatch, onToggleItem]
    );

    return (
      <View style={styles.container}>
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

const styles = StyleSheet.create({
  container: {
    paddingBottom: 50,
  },
});
