import { StyleSheet, View } from 'react-native';
import { CheckboxItem } from '../../../ui/CheckboxItem';
import { Buttons } from './Buttons';
import { CartItems } from './CartItems';

export const Cart = () => {
  return (
    <View style={styles.container}>
      <Buttons />
      <CheckboxItem item="Select all" onPress={() => {}} />
      <CartItems />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingBottom: 20,
  },
});
