import { StyleSheet, Text } from 'react-native';
import { colors } from '../../../consts';

export const DateText = ({ item }) => {
  return (
    <>
      {item.dateDelivered && (
        <Text style={styles.delivered}>Delivered: {item.dateDelivered}</Text>
      )}
      {item?.return?.date && (
        <Text style={styles.returned}>Returned: {item?.return?.date}</Text>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  delivered: {
    color: colors.green,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  returned: {
    color: colors.darkRed,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
