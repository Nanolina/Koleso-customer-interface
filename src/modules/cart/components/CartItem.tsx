import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { css } from '../../../consts';
import { CheckboxItem } from '../../../ui/CheckboxItem';
import { Hr } from '../../../ui/Hr';
import { Icon } from '../../../ui/Icon';
import { heightImage, widthImage } from '../consts';
import { ICartItemProps } from '../types';
import { BottomCartItem } from './BottomCartItem';
import { DetailsContainer } from './DetailsContainer';

export const CartItem: React.FC<ICartItemProps> = React.memo(
  ({ item, isSelected, toggleItemSelection }) => {
    return (
      <View style={styles.container}>
        <View style={styles.itemContainer}>
          <CheckboxItem
            isSelected={isSelected}
            onToggle={toggleItemSelection}
          />
          <Image source={{ uri: item.image }} style={styles.image} />
          <DetailsContainer item={item} />
          <Icon name="delete" />
        </View>
        <Hr />
        <BottomCartItem quantity={item.quantity} />
      </View>
    );
  }
);

const styles = StyleSheet.create({
  container: {
    gap: 10,
    padding: 10,
    borderRadius: css.borderRadiusMax,
    ...css.shadow,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    gap: 5,
  },
  image: {
    width: widthImage,
    height: heightImage,
    borderRadius: css.borderRadiusMax,
  },
});
