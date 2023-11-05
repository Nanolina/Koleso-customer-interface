import { StyleSheet, Text, View } from 'react-native';
import { css } from '../../../../consts';

export const StatusSuccessPayment = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.boldText}>
        Payment was <Text style={styles.green}>successful</Text>
      </Text>
      <Text style={styles.text}>
        Your order number: <Text style={styles.boldText}>32345678523456</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    gap: 30,
  },
  boldText: {
    fontSize: css.size.text16,
    fontWeight: 'bold',
    color: css.colors.white,
  },
  green: {
    color: css.colors.green,
  },
  text: {
    fontSize: css.size.text16,
    color: css.colors.white,
  },
});
