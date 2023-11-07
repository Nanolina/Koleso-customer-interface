import { useCallback, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { productCards } from '../../../../mockData';
import { PriceInfo } from '../../../components/PriceInfo';
import { css } from '../../../consts';
import { CheckboxItem } from '../../../ui/CheckboxItem';
import { Hr } from '../../../ui/Hr';
import { CartItems } from './CartItems';

export const Cart: React.FC = () => {
  const [isSelectedAll, setIsSelectedAll] = useState(false);
  const [selectedItems, setSelectedItems] = useState<{
    [key: string]: boolean;
  }>({});

  const toggleSelectAll = useCallback(() => {
    if (isSelectedAll) {
      setIsSelectedAll(false);
      setSelectedItems({});
    } else {
      setIsSelectedAll(true);
      const newSelectedItems: { [key: string]: boolean } = {};
      productCards.forEach((item) => {
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
      <CheckboxItem
        text="Select all"
        isSelected={isSelectedAll}
        onToggle={toggleSelectAll}
      />
      <CartItems
        items={productCards}
        selectedItems={selectedItems}
        toggleItemSelection={toggleItemSelection}
      />
      <View style={css.priceInfoContainer}>
        <PriceInfo text="Price for 1 product" price="100" />
        <PriceInfo text="Discount" price="-50" />
      </View>
      <Hr />
      <View style={css.priceInfoContainer}>
        <PriceInfo text="Total cost" price="50" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: css.paddingTop,
    paddingBottom: css.paddingBottom,
  },
});
