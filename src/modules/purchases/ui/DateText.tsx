import { StyleSheet, Text } from 'react-native';
import { css } from '../../../consts';

export const DateText = ({ item }) => {
  return (
    <>
      {item.dateDelivered && (
        <Text style={styles.delivered}>Delivered: {item.dateDelivered}</Text>
      )}
      {item.dateReturned && (
        <Text style={styles.returned}>Returned: {item.dateReturned}</Text>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  delivered: {
    color: css.colors.green,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  returned: {
    color: css.colors.darkRed,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
