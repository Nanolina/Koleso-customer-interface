import { Dimensions, Platform, StyleSheet, View } from 'react-native';
import { Image } from 'react-native-elements';
import { css } from '../../../consts';

const { height } = Dimensions.get('window');
const imageHeight = height / 2;

export const ImageContainer = ({ image }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: image }} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    ...(Platform.OS === 'web' && {
      paddingVertical: css.padding,
    }),
  },
  image: {
    width: '100%',
    height: imageHeight,
    resizeMode: Platform.OS === 'web' ? 'contain' : 'cover',
  },
});
