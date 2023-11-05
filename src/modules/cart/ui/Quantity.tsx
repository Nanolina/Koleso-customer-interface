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
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  quantity: {
    fontWeight: 'bold',
    fontSize: css.size.text20,
    color: css.colors.main,
    textAlign: 'center',
  },
});
