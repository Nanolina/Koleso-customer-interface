import { Image, StyleSheet, Text, View } from 'react-native';
import { css } from '../../../../consts';
import { images } from '../../consts';

export const StatusErrorPayment = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={images.exclamation} style={styles.image} />
        <Text style={styles.text}>Insufficient funds on the card</Text>
      </View>

      <Text style={styles.text}>The order was not generated</Text>
      <Text style={styles.green}>Please try again</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    ...css.modal.statusPayment.container,
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
    fontSize: css.size.text18,
    fontWeight: 'bold',
    flexShrink: 1,
  },
  green: {
    color: css.colors.green,
    fontSize: css.size.text16,
    fontWeight: 'bold',
  },
});
