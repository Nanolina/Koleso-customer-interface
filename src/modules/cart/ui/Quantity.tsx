import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors, sizes } from '../../../consts';
import { IQuantityProps } from '../types';

export const Quantity: React.FC<IQuantityProps> = React.memo(({ quantity }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.quantity}>{quantity}</Text>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  quantity: {
    fontWeight: 'bold',
    fontSize: sizes.text18,
    color: colors.main,
  },
});
