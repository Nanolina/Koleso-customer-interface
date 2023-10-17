import { StyleSheet, View } from 'react-native';
import { Quantity } from '../ui/Quantity';
import { Sign } from '../ui/Sign';

export const QuantityContainer = ({ quantity }) => {
  return (
    <View style={styles.container}>
      <Sign type="-" />
      <Quantity quantity={quantity} />
      <Sign type="+" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: 5,
  },
});
