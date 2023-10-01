import { Dimensions, StyleSheet, View } from 'react-native';
import { Image } from 'react-native-elements';
import { borderRadius } from '../../../../consts';
import { IconContainer } from './IconContainer';
import { Platform } from 'react-native';

const { height } = Dimensions.get('window');
const imageHeight = height * 0.9;

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
    borderRadius,
    width: '100%',
    height: Platform.OS === 'web' ? imageHeight : 200,
    resizeMode: 'cover',
  },
});
