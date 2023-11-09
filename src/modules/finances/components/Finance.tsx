import { StyleSheet, Text, View } from 'react-native';
import { IFinanceProps } from '../../../../mockData';
import { colors, css, currency, sizes } from '../../../consts';
import { Hr } from '../../../ui/Hr';

export const Finance: React.FC<{ finance: IFinanceProps }> = ({ finance }) => {
  return (
    <View>
      <View style={styles.row}>
        <Text style={styles.text}>
          {finance.text} №
          <Text style={styles.boldText}> {finance.orderNumber}</Text>
        </Text>

        <View style={styles.amountContainer}>
          <Text style={styles.amount}>
            {finance.paymentAmount} {currency}
          </Text>
        </View>
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
          {finance.status}
        </Text>
      </View>

      <Hr />
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    paddingBottom: 20,
  },
  text: {
    fontSize: sizes.text15,
  },
  boldText: {
    fontSize: sizes.text15,
    fontWeight: 'bold',
  },
  amountContainer: {
    borderWidth: 1,
    backgroundColor: colors.pink,
    borderColor: colors.pink,
    paddingHorizontal: 5,
    borderRadius: css.borderRadiusMin,
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
