import React, { useState } from 'react';
import { Image, Platform, StyleSheet, View } from 'react-native';
import { useSelector } from 'react-redux';
import { css } from '../../../consts';
import { CheckboxItem } from '../../../ui/CheckboxItem';
import { Hr } from '../../../ui/Hr';
import { heightImage, widthImage } from '../consts';
import { DetailsContainer } from './DetailsContainer';
import { IconContainer } from './IconContainer';
import { StoreDetails } from './StoreDetails';
import { StoreDetailsButton } from './StoreDetailsButton';

export const CartItem = ({ item, quantity = 1 }: any) => {
  const [storeDetails, setStoreDetails] = useState(false);
  const { delivery } = useSelector((state: any) => state.cart);

  return (
    <View style={styles.container}>
      <View style={styles.itemContainer}>
        <CheckboxItem onToggle={() => {}} />
        <Image source={{ uri: item.image }} style={styles.image} />
        <DetailsContainer item={item} />
        <IconContainer quantity={quantity} />
      </View>

      {delivery === 'Self-delivery' && (
        <StoreDetailsButton onPress={() => setStoreDetails(!storeDetails)} />
      )}

      {storeDetails && delivery === 'Self-delivery' && (
        <StoreDetails item={item} />
      )}
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
