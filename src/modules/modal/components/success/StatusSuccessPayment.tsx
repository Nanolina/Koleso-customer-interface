import { StyleSheet, Text, View } from 'react-native';
import { colors, sizes } from '../../../../consts';

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
    fontSize: sizes.text16,
    fontWeight: 'bold',
    color: colors.white,
  },
  green: {
    color: colors.green,
  },
  text: {
    fontSize: sizes.text16,
    color: colors.white,
  },
});
