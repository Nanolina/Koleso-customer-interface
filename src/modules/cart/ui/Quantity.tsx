import { StyleSheet, Text, View } from 'react-native';
import { colors, css } from '../../../consts';

export const Quantity = ({ quantity }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.quantity}>{quantity}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  quantity: {
    fontWeight: 'bold',
    fontSize: css.size.text18,
    color: colors.main,
  },
});
