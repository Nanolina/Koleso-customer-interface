import { StyleSheet, Text, View } from 'react-native';
import { togglePayment } from '../../../../redux/slices/paymentSlice';
import { ButtonsGroup } from '../../../components/ButtonsGroup';
import { css } from '../../../consts';

// Use Stripe Connect
// You can try PayPal, but it doesn't work in UAE and Cyprus
// 'https://dashboard.stripe.com/connect/accounts/overview'

export const Payment = () => {
  return (
    <View style={styles.container}>
      <ButtonsGroup
        options={[
          { text: 'Card', value: 'Card' },
          { text: 'Apple pay', value: 'Apple pay' },
        ]}
        currentState="payment"
        toggleFunction={togglePayment}
        slice="payment"
      />

      <Text>Payment</Text>
      <Text>use Stripe Connect</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingBottom: css.paddingBottom,
  },
});
