import { Dimensions, StyleSheet, View } from 'react-native';
import { Image } from 'react-native-elements';

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
  },
  image: {
    width: '100%',
    height: imageHeight,
    resizeMode: 'cover',
  },
});
