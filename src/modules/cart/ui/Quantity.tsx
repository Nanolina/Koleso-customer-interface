import { StyleSheet, Text, View } from 'react-native';
import { colors, sizes } from '../../../consts';

interface IQuantityProps {
  quantity: number;
}

export const Quantity: React.FC<IQuantityProps> = ({ quantity }) => {
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
