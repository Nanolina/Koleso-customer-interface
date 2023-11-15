import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Icon } from '../../../ui/Icon';
import { IQuantityProps } from '../types';
import { QuantityContainer } from './QuantityContainer';

export const BottomCartItem: React.FC<IQuantityProps> = React.memo(
  ({ quantity }) => {
    return (
      <View style={styles.container}>
        <View style={styles.iconsContainer}>
          <Icon name="favorite-border" />
        </View>
        <QuantityContainer quantity={quantity} />
      </View>
    );
  }
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  iconsContainer: {
    flexDirection: 'row',
    gap: 10,
  },
});
