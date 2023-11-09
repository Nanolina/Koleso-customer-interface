import React from 'react';
import { StyleSheet, View } from 'react-native';
import { colors, css } from '../consts';
import { Price } from '../ui/Price';

export const PriceContainer = React.memo(
  ({ price, oldPrice, priceSize }: any) => {
    const styles = getStyles(priceSize);

    return (
      <View style={styles.centeredContent}>
        <View style={styles.container}>
          <Price price={price} style={styles.currentPrice} />
        </View>
        {oldPrice && <Price price={oldPrice} style={styles.oldPrice} />}
      </View>
    );
  }
);

const getStyles = (priceSize) =>
  StyleSheet.create({
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
      fontSize: priceSize,
    },
    oldPrice: {
      textDecorationLine: 'line-through',
      color: colors.gray,
    },
  });
