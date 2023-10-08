import { StyleSheet, View } from 'react-native';
import { PriceInfo } from '../../../components/PriceInfo';
import { css } from '../../../consts';
import { CheckboxItem } from '../../../ui/CheckboxItem';
import { Hr } from '../../../ui/Hr';
import { ButtonsDelivery } from './ButtonsDelivery';
import { CartItems } from './CartItems';

export const Cart = () => {
  return (
    <View style={styles.container}>
      <ButtonsDelivery />
      <CheckboxItem item="Select all" onPress={() => {}} />
      <CartItems />
      <View style={css.priceInfoContainer}>
        <PriceInfo text="Price for 1 product" price="100" />
        <PriceInfo text="Discount" price="-50" />
      </View>
      <Hr />
      <View style={css.priceInfoContainer}>
        <PriceInfo text="Total cost" price="50" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingBottom: css.paddingBottom,
  },
});
