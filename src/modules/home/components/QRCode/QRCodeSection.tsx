import { StyleSheet, Text, View } from 'react-native';
import { QRCode } from '../../ui/QRCode/QRCode';
import { sizes } from '../../../../consts';

interface IQRCodeSectionProps {
  code: string;
}

export const QRCodeSection: React.FC<IQRCodeSectionProps> = ({ code }) => (
  <View style={styles.container}>
    <QRCode />
    <Text style={styles.text}>code: {code}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    gap: 5,
  },
  text: {
    fontSize: sizes.text12,
    textAlign: 'left',
    fontWeight: 'bold',
  },
});
