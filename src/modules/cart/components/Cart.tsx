import { StyleSheet, View } from 'react-native';
import { ButtonGreen } from '../../../ui/ButtonGreen';
import { CheckboxItem } from '../../../ui/CheckboxItem';
import { Hr } from '../../../ui/Hr';
import { Buttons } from './Buttons';
import { CartItems } from './CartItems';
import { PriceInfo } from './PriceInfo';

export const Cart = () => {
  return (
    <View style={styles.container}>
      <Buttons />
      <CheckboxItem item="Select all" onPress={() => {}} />
      <CartItems />
      <View style={styles.priceContainer}>
        <PriceInfo text="Price for 1 product" price="100" />
        <PriceInfo text="Discount" price="-50" />
      </View>
      <Hr />
      <View style={styles.priceContainer}>
        <PriceInfo text="Total cost" price="50" />
      </View>
      <View style={styles.buttonContainer}>
        <ButtonGreen text="Book" onPress={() => {}} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingBottom: 20,
  },
  priceContainer: {
    gap: 10,
    paddingVertical: 10,
  },
  buttonContainer: {
    alignItems: 'flex-end',
  },
});
