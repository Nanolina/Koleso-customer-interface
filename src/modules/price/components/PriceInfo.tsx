import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors, currency, sizes } from '../../../consts';
import { IPriceInfoProps } from '../types';

export const PriceInfo: React.FC<IPriceInfoProps> = React.memo(
  ({ text, price, hasCurrency = true }) => {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>{text}</Text>
        <Text
          style={[
            styles.price,
            { color: hasCurrency ? colors.black : colors.green },
          ]}
        >
          {price} {hasCurrency && currency}
        </Text>
      </View>
    );
  }
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  text: {
    fontSize: sizes.text20,
  },
  price: {
    fontSize: sizes.text20,
    fontWeight: 'bold',
  },
});
