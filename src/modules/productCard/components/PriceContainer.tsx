import { StyleSheet, Text, View } from 'react-native';
import { css } from '../../../consts';

export const PriceContainer = ({ price, oldPrice }) => {
  return (
    <View style={styles.priceContainer}>
      <Text style={styles.price}>{`$${price}`}</Text>
      <Text style={styles.oldPrice}>{`$${oldPrice}`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
  price: {
    fontSize: css.size.text20,
    fontWeight: 'bold',
  },
  oldPrice: {
    fontSize: css.size.text12,
    textDecorationLine: 'line-through',
    color: css.colors.gray,
  },
});
