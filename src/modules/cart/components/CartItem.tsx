import React, { useState } from 'react';
import { Image, Platform, StyleSheet, View } from 'react-native';
import { useSelector } from 'react-redux';
import { selfDelivery } from '../../../../consts';
import { StoreDetails } from '../../../components/StoreDetails';
import { StoreDetailsButton } from '../../../components/StoreDetailsButton';
import { css } from '../../../consts';
import { CheckboxItem } from '../../../ui/CheckboxItem';
import { Hr } from '../../../ui/Hr';
import { gapBetweenIcons, heightImage, widthImage } from '../consts';
import { DetailsContainer } from './DetailsContainer';
import { IconContainer } from './IconContainer';
import { QuantityContainer } from './QuantityContainer';

export const CartItem = ({ item, quantity = 1 }: any) => {
  const [storeDetails, setStoreDetails] = useState(false);
  const { delivery } = useSelector((state: any) => state.cart);

  return (
    <View style={styles.container}>
      <View style={styles.itemContainer}>
        <CheckboxItem onToggle={() => {}} />
        <Image source={{ uri: item.image }} style={styles.image} />
        <DetailsContainer item={item} />
        <View style={styles.iconContainer}>
          <IconContainer />
          <QuantityContainer quantity={quantity} />
        </View>
      </View>

      {delivery === selfDelivery && (
        <StoreDetailsButton onPress={() => setStoreDetails(!storeDetails)} />
      )}

      {storeDetails && delivery === selfDelivery && (
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
  iconContainer: {
    alignItems: 'flex-end',
    gap: gapBetweenIcons,
  },
});
