import { StyleSheet, View } from 'react-native';
import { productCards } from '../../../../mockData';
import { CartItem } from './CartItem';

export const CartItems = () => {
  return (
    <View style={styles.container}>
      {productCards.map((item) => (
        <CartItem item={item} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 80,
  },
});
