import React from 'react';
import { Dimensions, Platform, StyleSheet, View } from 'react-native';
import { WebCardWrapper } from '../../ui/productCard/WebCardWrapper';
import { ImageContainer } from './ImageContainer';
import { PriceContainer } from './PriceContainer';
import { TitleContainer } from './TitleContainer';

const { width } = Dimensions.get('window');
const cardWidth = width / 3;

export const ProductCard = ({ image, price, oldPrice, seller, title }) => {
  return (
    <WebCardWrapper cardWidth={cardWidth}>
      <View style={styles.card}>
        <ImageContainer image={image} />
        <PriceContainer price={price} oldPrice={oldPrice} />
        <TitleContainer seller={seller} title={title} />
      </View>
    </WebCardWrapper>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    gap: 4,
    paddingVertical: Platform.OS === 'web' ? 20 : 2.5,
    paddingHorizontal: Platform.OS === 'web' ? 20 : 2.5,
    paddingBottom: 20,
    maxWidth: Platform.OS === 'web' ? cardWidth : '100%',
  },
});
