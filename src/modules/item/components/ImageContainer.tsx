import { Dimensions, Platform, StyleSheet, View } from 'react-native';
import { Image } from 'react-native-elements';
import { css } from '../../../consts';
import { IconContainer } from './IconContainer';

const { height } = Dimensions.get('window');
const imageHeight = height / 2;

export const ImageContainer = ({ image }) => {
  return (
    <View style={styles.imageContainer}>
      <Image source={{ uri: image }} style={styles.image} />
      <IconContainer name="favorite" type="top" />
      <IconContainer name="shopping-cart" type="bottom" />
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    position: 'relative',
  },
  image: {
    width: '100%',
    height: imageHeight,
    resizeMode: 'cover',
  },
});
