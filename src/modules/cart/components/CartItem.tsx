import React, { useCallback, useState } from 'react';
import { Image, Platform, StyleSheet, View } from 'react-native';
import { IItemProps } from '../../../../mockData';
import { css } from '../../../consts';
import { CheckboxItem } from '../../../ui/CheckboxItem';
import { Hr } from '../../../ui/Hr';
import { heightImage, widthImage } from '../consts';
import { DetailsContainer } from './DetailsContainer';
import { Menu } from './Menu';

interface ICartItemProps {
  item: IItemProps;
  isSelected: boolean;
  toggleItemSelection: () => void;
}

export const CartItem: React.FC<ICartItemProps> = ({
  item,
  isSelected,
  toggleItemSelection,
}) => {

  return (
    <View style={styles.container}>
      <View style={styles.itemContainer}>
        <CheckboxItem isSelected={isSelected} onToggle={toggleItemSelection} />
        <Image source={{ uri: item.image }} style={styles.image} />
        <DetailsContainer item={item} quantity={item.quantity} />
        <Menu />
      </View>
      <Hr />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 20,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    gap: Platform.OS === 'web' ? 20 : 5,
  },
  image: {
    width: widthImage,
    height: heightImage,
    borderRadius: css.borderRadiusMax,
  },
});
