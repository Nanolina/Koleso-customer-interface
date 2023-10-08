import React from 'react';
import { Image, Platform, StyleSheet, View } from 'react-native';
import { css } from '../../../consts';
import { CheckboxItem } from '../../../ui/CheckboxItem';
import { heightImage, widthImage } from '../consts';
import { DetailsContainer } from './DetailsContainer';
import { IconContainer } from './IconContainer';

export const CartItem = ({ item, quantity = 1 }: any) => (
  <View style={styles.container}>
    <CheckboxItem onToggle={() => {}} />
    <Image source={{ uri: item.image }} style={styles.image} />
    <DetailsContainer item={item} />
    <IconContainer quantity={quantity} />
  </View>
);

const styles = StyleSheet.create({
  container: {
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
