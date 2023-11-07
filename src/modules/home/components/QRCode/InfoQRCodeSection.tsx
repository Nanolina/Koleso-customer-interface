import { StyleSheet, Text, View } from 'react-native';
import { colors, sizes } from '../../../../consts';

export const InfoQRCodeSection = () => (
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
  },
  title: {
    fontSize: sizes.title,
    fontWeight: 'bold',
    color: colors.yellow,
    textAlign: 'left',
  },
  text: {
    fontSize: sizes.text15,
    textAlign: 'left',
  },
});
