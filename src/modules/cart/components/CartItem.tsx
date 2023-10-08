import React, { useState } from 'react';
import { Image, Platform, StyleSheet, View } from 'react-native';
import { css } from '../../../consts';
import { CheckboxItem } from '../../../ui/CheckboxItem';
import { heightImage, widthImage } from '../consts';
import { DetailsContainer } from './DetailsContainer';
import { IconContainer } from './IconContainer';
import { StoreButton } from './StoreButton';
import { StoreDetails } from './StoreDetails';

export const CartItem = ({ item, quantity = 1 }: any) => {
  const [storeDetails, setStoreDetails] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.itemContainer}>
        <CheckboxItem onToggle={() => {}} />
        <Image source={{ uri: item.image }} style={styles.image} />
        <DetailsContainer item={item} />
        <IconContainer quantity={quantity} />
      </View>
      <StoreButton onPress={() => setStoreDetails(!storeDetails)} />
      {storeDetails && <StoreDetails item={item} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 10,
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
    borderRadius: css.borderRadius,
  },
});
