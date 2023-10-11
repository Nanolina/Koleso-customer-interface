import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';
import { css } from '../../../consts';
import { Gradient } from '../../../ui/Gradient';
import { gifs } from '../consts';

const { height } = Dimensions.get('window');

export const Success = () => {
  return (
    <Gradient style={styles.gradient}>
      <View style={styles.container}>
        <Text style={styles.text}>Thank you for you purchase!</Text>
        <Image source={gifs.success} style={styles.image} />
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
