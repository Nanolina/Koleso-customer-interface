import { StyleSheet, Text, View } from 'react-native';
import { colors, sizes } from '../../../../consts';

export const InfoQRCodeSection: React.FC = () => (
  <View style={styles.container}>
    <Text style={styles.title}>Delivery QR-code</Text>
    <Text style={styles.text}>
      Show this QR-code to an employee or provide a phone number and code
    </Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 2,
    alignItems: 'flex-start',
    gap: 5,
  },
  title: {
    fontSize: sizes.text16,
    fontWeight: 'bold',
    color: colors.green,
    textAlign: 'left',
  },
  text: {
    fontSize: sizes.text12,
    textAlign: 'left',
  },
});
