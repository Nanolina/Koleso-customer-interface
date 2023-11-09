import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors, currency, sizes } from '../consts';

export const PriceInfo = React.memo(({ text, price, hasCurrency = true }: any) => {
  const styles = getStyles(hasCurrency);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
      <Text style={styles.price}>
        {price} {hasCurrency && currency}
      </Text>
    </View>
  );
});

const getStyles = (hasCurrency) =>
  StyleSheet.create({
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
      color: hasCurrency ? colors.black : colors.green,
    },
  });
