import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { InfoItem } from '../../../components/InfoItem';
import { currency, sizes } from '../../../consts';

export const TextInfoContainer = React.memo(({ item }: any) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{item.title}</Text>
      <InfoItem item={item} />
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
