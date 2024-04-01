import { useTranslation } from 'react-i18next';
import { StyleSheet, Text, View } from 'react-native';
import { ButtonsGroup } from '../../../components/ButtonsGroup';
import { css } from '../../../consts';
import { togglePayment } from '../../../redux/slices/paymentSlice';

// Use Stripe Connect
// You can try PayPal, but it doesn't work in UAE and Cyprus
// 'https://dashboard.stripe.com/connect/accounts/overview'

export const Payment = () => {
  const { t } = useTranslation();

  return (
    <View style={styles.container}>
      <ButtonsGroup
        options={[
          { text: t('payment.card'), value: 'Card' },
          { text: t('payment.applePay'), value: 'Apple pay' },
        ]}
        currentState="payment"
        toggleFunction={togglePayment}
        slice="payment"
      />

      <Text>{t('payment.label')}</Text>
      <Text>use Stripe Connect</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingBottom: css.paddingBottom,
  },
});
