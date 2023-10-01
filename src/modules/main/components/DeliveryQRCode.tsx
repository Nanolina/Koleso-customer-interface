import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, Text, View } from 'react-native';
import { borderRadius, colors, padding, size } from '../../../consts';
import { QRCode } from '../ui/QRCode';

export const DeliveryQRCode = () => {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={[colors.pink, colors.purple]}
        style={styles.gradientBackground}
        start={{ x: 1, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        <View style={styles.flexRow}>
          <View style={styles.deliveryTextContainer}>
            <Text style={styles.title}>Delivery QR-code</Text>
            <Text style={styles.text}>
              Show this QR-code to an employee or provide a phone number and
              code
            </Text>
          </View>

          <View style={styles.QRCodeContainer}>
            <QRCode />
            <Text>code: 27300</Text>
          </View>
        </View>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: borderRadius,
    overflow: 'hidden',
  },
  flexRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  deliveryTextContainer: {
    flex: 2,
    alignItems: 'flex-start',
  },
  QRCodeContainer: {
    flex: 1,
    alignItems: 'center',
  },
  text: {
    fontSize: size.text,
    textAlign: 'left',
  },
  title: {
    fontSize: size.title,
    fontWeight: 'bold',
    color: colors.yellow,
    textAlign: 'left',
  },
  gradientBackground: {
    padding: padding,
  },
});
