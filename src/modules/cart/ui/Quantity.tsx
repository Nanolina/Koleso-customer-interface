import { StyleSheet, Text, View } from 'react-native';
import { colors, sizes } from '../../../consts';

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
    fontSize: sizes.text18,
    color: colors.main,
  },
});
