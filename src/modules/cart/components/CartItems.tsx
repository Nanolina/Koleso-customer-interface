import React from 'react';
import { StyleSheet, View } from 'react-native';
import { IItemProps } from '../../../../mockData';
import { CartItem } from './CartItem';

interface ICartItemsProps {
  items: IItemProps[];
  selectedItems: { [key: string]: boolean };
  toggleItemSelection: (id: string) => void;
}

export const CartItems: React.FC<ICartItemsProps> = React.memo(
  ({ items, selectedItems, toggleItemSelection }) => {
    return (
      <View style={styles.container}>
        {items.map((item) => (
          <CartItem
            item={item}
            key={item.id}
            isSelected={!!selectedItems[item.id]}
            toggleItemSelection={() => toggleItemSelection(item.id)}
          />
        ))}
      </View>
    );
  }
);

const styles = StyleSheet.create({
  container: {
    gap: 20,
  },
});
