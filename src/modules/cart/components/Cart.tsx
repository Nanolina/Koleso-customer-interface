import { StyleSheet, View } from 'react-native';
import { css } from '../../../consts';
import { CheckboxItem } from '../../../ui/CheckboxItem';
import { Hr } from '../../../ui/Hr';
import { ButtonsDelivery } from './ButtonsDelivery';
import { CartItems } from './CartItems';
import { PriceInfo } from './PriceInfo';

export const Cart = () => {
  return (
    <View style={styles.container}>
      <ButtonsDelivery />
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingBottom: css.paddingBottom,
  },
  priceContainer: {
    gap: 10,
    paddingVertical: 10,
  },
});
