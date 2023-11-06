import { StyleSheet, Text, View } from 'react-native';
import { css, currency } from '../consts';

export const PriceInfo = ({ text, price, hasCurrency = true }) => {
  const styles = getStyles(hasCurrency);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
      <Text style={styles.price}>
        {price} {hasCurrency && currency}
      </Text>
    </View>
  );
};

const getStyles = (hasCurrency) =>
  StyleSheet.create({
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
      color: hasCurrency ? css.colors.black : css.colors.green,
    },
  });
