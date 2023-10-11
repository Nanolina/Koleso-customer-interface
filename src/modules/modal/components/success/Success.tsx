import { Image, StyleSheet, Text, View } from 'react-native';
import { css } from '../../../../consts';
import { Gradient } from '../../../../ui/Gradient';
import { images } from '../../consts';
import { StatusSuccessPayment } from './StatusSuccessPayment';

export const Success = () => {
  return (
    <View style={styles.container}>
      <Gradient style={styles.gradient}>
        <View style={styles.header}>
          <Text style={styles.text}>Thank you for you purchase!</Text>
          <Image source={images.success} style={styles.image} />
        </View>
      </Gradient>
      <StatusSuccessPayment />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 10,
  },
  gradient: {
    borderRadius: css.borderRadiusMax,
    justifyContent: 'center',
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
    fontSize: css.size.text16,
    fontWeight: 'bold',
  },
});
