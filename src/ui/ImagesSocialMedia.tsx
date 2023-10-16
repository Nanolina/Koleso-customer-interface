import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import { imagesSocialMedia } from '../consts';

export const ImagesSocialMedia = ({ socialMedia }) => {
  const renderIcon = (key, source) => {
    if (socialMedia[key]) {
      return (
        <TouchableOpacity key={key}>
          <Image source={source} style={styles.images} />
        </TouchableOpacity>
      );
    }
  };

  return (
    <View style={styles.container}>
      {Object.keys(imagesSocialMedia).map((key) =>
        renderIcon(key, imagesSocialMedia[key])
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
	gap: 5,
  },
  images: {
    width: 35,
    height: 35,
  },
});
