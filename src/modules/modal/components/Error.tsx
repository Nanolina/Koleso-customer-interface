import { Dimensions, Image, StyleSheet, View } from 'react-native';
import { css } from '../../../consts';
import { Gradient } from '../../../ui/Gradient';
import { gifs } from '../consts';
import { TextError } from '../ui/TextError';

const { height } = Dimensions.get('window');

export const Error = () => {
  return (
    <Gradient style={styles.gradient}>
      <View style={styles.container}>
        <TextError />
        <Image source={gifs.error} style={styles.image} />
      </View>
    </Gradient>
  );
};

const styles = StyleSheet.create({
  gradient: {
    height: height / 10,
    borderRadius: css.borderRadiusMax,
    justifyContent: 'center',
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 20,
  },
  image: {
    width: 30,
    height: 30,
  },
});
