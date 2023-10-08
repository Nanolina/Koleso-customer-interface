import { StyleSheet, Text, View } from 'react-native';
import { css, currency } from '../../../consts';

export const PriceInfo = ({ text, price }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
      <Text style={styles.price}>
        {price} {currency}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  text: {
    fontSize: css.size.text20,
  },
  price: {
    fontSize: css.size.text20,
    fontWeight: 'bold',
  },
});
