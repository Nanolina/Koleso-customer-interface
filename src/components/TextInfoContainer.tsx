import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { currency, sizes } from '../consts';
import { Info } from '../modules/returns/ui/Info';

export const TextInfoContainer = React.memo(({ item }: any) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{item.title}</Text>

      {item.color && <Info text="Color" info={item.color} />}
      {item.selectedSize && <Info text="Size" info={item.selectedSize} />}

      <Text style={styles.price}>
        {item.price} {currency}
      </Text>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    gap: 2,
  },
  title: {
    fontSize: sizes.text15,
    textAlign: 'left',
    fontWeight: 'bold',
  },
  price: {
    fontSize: sizes.text18,
    fontWeight: 'bold',
  },
});
