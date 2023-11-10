import React from 'react';
import { StyleSheet, View } from 'react-native';
import { colors, css, sizes } from '../../../consts';
import { Price } from '../../../ui/Price';
import { IPriceContainerProps } from '../types';

export const PriceContainer: React.FC<IPriceContainerProps> = React.memo(
  ({ price, oldPrice, priceSize }) => {
    return (
      <View style={styles.centeredContent}>
        <View style={styles.container}>
          <Price
            price={price}
            style={[styles.currentPrice, { fontSize: priceSize }]}
          />
        </View>
        {oldPrice && <Price price={oldPrice} style={styles.oldPrice} />}
      </View>
    );
  }
);

const styles = StyleSheet.create({
  centeredContent: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 5,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: css.borderRadiusMin,
  },
  currentPrice: {
    fontWeight: 'bold',
  },
  oldPrice: {
    textDecorationLine: 'line-through',
    color: colors.darkGray,
    fontSize: sizes.text15,
  },
});
