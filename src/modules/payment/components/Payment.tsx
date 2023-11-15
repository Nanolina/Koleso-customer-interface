import { StyleSheet, Text, View } from 'react-native';
import { togglePayment } from '../../../../redux/slices/paymentSlice';
import { ButtonsGroup } from '../../../components/ButtonsGroup';
import { css } from '../../../consts';
import { useTranslation } from 'react-i18next';

// Use Stripe Connect
// You can try PayPal, but it doesn't work in UAE and Cyprus
// 'https://dashboard.stripe.com/connect/accounts/overview'

export const Payment = () => {
  const { t } = useTranslation('translation', {
    keyPrefix: 'payment',
  });

  return (
    <View style={styles.container}>
      <ButtonsGroup
        options={[
          { text: t('card'), value: 'Card' },
          { text: t('applePay'), value: 'Apple pay' },
        ]}
        currentState="payment"
        toggleFunction={togglePayment}
        slice="payment"
      />

      <Text>{t('label')}</Text>
      <Text>use Stripe Connect</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingBottom: css.paddingBottom,
  },
});
