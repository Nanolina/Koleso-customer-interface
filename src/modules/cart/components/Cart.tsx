import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { StyleSheet, View } from 'react-native';
import { productCards } from '../../../../mockData';
import { css } from '../../../consts';
import { IItemProps } from '../../../types';
import { CheckboxItem } from '../../../ui/CheckboxItem';
import { PriceInfoContainer } from '../../price';
import { ISelectedItemsState } from '../types';
import { CartItems } from './CartItems';

export const Cart: React.FC = () => {
  const { t } = useTranslation();

  const [isSelectedAll, setIsSelectedAll] = useState(false);
  const [selectedItems, setSelectedItems] = useState<ISelectedItemsState>({});

  const toggleSelectAll = useCallback(() => {
    if (isSelectedAll) {
      setIsSelectedAll(false);
      setSelectedItems({});
    } else {
      setIsSelectedAll(true);

      const newSelectedItems: ISelectedItemsState = {};

      productCards.forEach((item: IItemProps) => {
        newSelectedItems[item.id] = true;
      });
      setSelectedItems(newSelectedItems);
    }
  }, [isSelectedAll]);

  const toggleItemSelection = useCallback(
    (id: string) => {
      const newSelectedItems = { ...selectedItems, [id]: !selectedItems[id] };

      // Check that the number of enabled checkboxes is equal to the number of items in the cart
      const areAllSelected =
        productCards.length ===
        Object.values(newSelectedItems).filter((isSelected) => isSelected)
          .length;

      setSelectedItems(newSelectedItems);
      setIsSelectedAll(areAllSelected);
    },
    [selectedItems, productCards.length]
  );

  return (
    <View style={styles.container}>
      <View style={styles.selectAll}>
        <CheckboxItem
          text={t('selectAll')}
          isSelected={isSelectedAll}
          onToggle={toggleSelectAll}
        />
      </View>
      <CartItems
        items={productCards}
        selectedItems={selectedItems}
        toggleItemSelection={toggleItemSelection}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: css.paddingTop,
    paddingBottom: css.paddingBottom,
  },
  selectAll: {
    paddingLeft: 15,
  },
  priceContainer: {
    paddingTop: 30,
  },
});
