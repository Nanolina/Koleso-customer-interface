import { StyleSheet, Text, View } from 'react-native';
import { QRCode } from '../../ui/QRCode/QRCode';

export const QRCodeSection = ({ code }) => (
  <View style={styles.container}>
    <QRCode />
    <Text>code: {code}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
});
