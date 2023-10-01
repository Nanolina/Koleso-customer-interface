import React from 'react';
import { StyleSheet, View } from 'react-native';
import { ImageContainer } from './ImageContainer';
import { PriceContainer } from './PriceContainer';
import { TitleContainer } from './TitleContainer';

export const ProductCard = ({ image, price, oldPrice, seller, title }) => (
  <View style={styles.card}>
    <ImageContainer image={image} />
    <PriceContainer price={price} oldPrice={oldPrice} />
    <TitleContainer seller={seller} title={title} />
  </View>
);

const styles = StyleSheet.create({
  card: {
    flex: 1,
    gap: 4,
    marginHorizontal: 2.5,
  },
});
