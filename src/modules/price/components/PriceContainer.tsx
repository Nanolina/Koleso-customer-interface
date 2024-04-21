import React from 'react';
import { StyleSheet, View } from 'react-native';
import { colors, css, sizes } from '../../../consts';
import { IPriceContainerProps } from '../types';
import { Price } from '../ui/Price';

export const PriceContainer: React.FC<IPriceContainerProps> = React.memo(
  ({ priceSize, finalPrice, priceWithoutDiscount }) => {
    return (
      <View style={styles.centeredContent}>
        <View style={styles.container}>
          <Price
            price={finalPrice}
            style={[styles.finalPrice, { fontSize: priceSize }]}
          />
        </View>

        {priceWithoutDiscount && (
          <Price
            price={priceWithoutDiscount}
            style={styles.priceWithoutDiscount}
          />
        )}
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
    borderRadius: css.borderRadiusMax,
    backgroundColor: colors.pink,
    padding: 5,
  },
  finalPrice: {
    fontWeight: 'bold',
    color: colors.main,
  },
  priceWithoutDiscount: {
    textDecorationLine: 'line-through',
    color: colors.darkGray,
    fontSize: sizes.text15,
  },
});
