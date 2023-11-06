import { StyleSheet, Text, View } from 'react-native';
import { css } from '../../../consts';

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
    color: css.colors.main,
  },
});
