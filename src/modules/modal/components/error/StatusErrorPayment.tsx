import { Image, StyleSheet, Text, View } from 'react-native';
import { colors, sizes } from '../../../../consts';
import { images } from '../../consts';

export const StatusErrorPayment: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={images.exclamation} style={styles.image} />
        <Text style={styles.text}>Insufficient funds on the card</Text>
      </View>

      <View style={styles.bottomContainer}>
        <Text style={styles.text}>The order was not generated</Text>
        <Text style={styles.green}>Please try again</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    gap: 30,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 80,
    height: 80,
  },
  text: {
    fontSize: sizes.text18,
    fontWeight: 'bold',
    flexShrink: 1,
    color: colors.white,
  },
  green: {
    color: colors.green,
    fontSize: sizes.text16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  bottomContainer: {
    gap: 10,
  },
});
