import React from 'react';
import { useTranslation } from 'react-i18next';
import { StyleSheet, Text, View } from 'react-native';
import { colors, css, currency, sizes } from '../../../consts';
import { Hr } from '../../../ui/Hr';
import { IFinanceProps } from '../types';

export const Finance: React.FC<{ finance: IFinanceProps }> = React.memo(
  ({ finance }) => {
    const { t } = useTranslation();

    return (
      <View style={styles.container}>
        <View style={styles.row}>
          <Text style={styles.text}>
            {finance.type === 'payment' && t('finances.payment')}
            {finance.type === 'return' && t('finances.return')}
          </Text>

          <View style={styles.amountContainer}>
            <Text style={styles.amount}>
              {finance.paymentAmount} {currency}
            </Text>
          </View>
        </View>

        <View style={styles.row}>
          <Text style={[styles.text, styles.orderNumber]}>
            № {finance.orderNumber}
          </Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.date}>
            {finance.date} {finance.time}
          </Text>

          <Text
            style={
              finance.status === 'successful'
                ? styles.successful
                : styles.rejected
            }
          >
            {t(`finances.${finance.status}`)}
          </Text>
        </View>

        <Hr />
      </View>
    );
  }
);

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    gap: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    fontSize: sizes.text15,
  },
  orderNumber: {
    marginTop: -28,
    fontSize: sizes.text15,
    fontWeight: 'bold',
  },
  amountContainer: {
    borderRadius: css.borderRadiusMin,
    padding: 10,
    ...css.shadow,
  },
  amount: {
    fontSize: sizes.text15,
    fontWeight: 'bold',
  },
  date: {
    fontStyle: 'italic',
  },
  successful: {
    fontSize: sizes.text15,
    color: colors.green,
  },
  rejected: {
    fontSize: sizes.text15,
    color: colors.darkRed,
  },
});
