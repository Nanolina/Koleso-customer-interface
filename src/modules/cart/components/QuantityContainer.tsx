import React from 'react';
import { StyleSheet, View } from 'react-native';
import { css } from '../../../consts';
import { Quantity } from '../ui/Quantity';
import { Sign } from '../ui/Sign';

export const QuantityContainer = ({ quantity }) => {
  return (
    <View style={styles.container}>
      <Sign type="-" />
      <Quantity quantity={quantity} />
      <Sign type="+" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: css.colors.lightGray,
    borderRadius: css.borderRadiusMax,
    alignItems: 'center',
  },
});
