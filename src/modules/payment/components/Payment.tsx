import { StyleSheet, Text, View } from 'react-native';
import { css } from '../../../consts';
import { ButtonsPayment } from './ButtonsPayment';

// Use Stripe Connect
// You can try PayPal, but it doesn't work in UAE and Cyprus
// 'https://dashboard.stripe.com/connect/accounts/overview'

export const Payment = () => {
  return (
    <View style={styles.container}>
      <ButtonsPayment />
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
