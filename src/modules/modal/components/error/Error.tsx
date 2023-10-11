import { Dimensions, Image, StyleSheet, View } from 'react-native';
import { css } from '../../../../consts';
import { Gradient } from '../../../../ui/Gradient';
import { images } from '../../consts';
import { TextError } from '../../ui/TextError';
import { StatusErrorPayment } from './StatusErrorPayment';

const { height } = Dimensions.get('window');

export const Error = () => {
  return (
    <View style={styles.container}>
      <Gradient style={styles.gradient}>
        <View style={styles.header}>
          <TextError />
          <Image source={images.error} style={styles.image} />
        </View>
      </Gradient>
      <StatusErrorPayment />
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
    gap: 20,
  },
  image: {
    width: 30,
    height: 30,
  },
});
