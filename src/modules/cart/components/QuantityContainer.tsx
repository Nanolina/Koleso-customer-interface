import React from 'react';
import { StyleSheet, View } from 'react-native';
import { colors, css } from '../../../consts';
import { IQuantityProps } from '../types';
import { Quantity } from '../ui/Quantity';
import { Sign } from '../ui/Sign';

export const QuantityContainer: React.FC<IQuantityProps> = React.memo(
  ({ quantity }) => {
    return (
      <View style={styles.container}>
        <Sign type="-" />
        <Quantity quantity={quantity} />
        <Sign type="+" />
      </View>
    );
  }
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: colors.lightGray,
    borderRadius: css.borderRadiusMax,
    alignItems: 'center',
  },
});
