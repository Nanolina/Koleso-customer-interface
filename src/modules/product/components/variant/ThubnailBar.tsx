import React from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import { css } from '../../../../consts';

export const ThumbnailBar: React.FC<any> = ({
  images,
  selectedImage,
  setSelectedImage,
}) => {
  return (
    <View style={styles.scrollContainer}>
      {images.map((img, index) => (
        <TouchableOpacity
          key={`${img.url}-${index}`}
          onPress={() => {
            // onSelect(img);
            setSelectedImage(img.url);
          }}
        >
          <Image
            source={{ uri: img.url }}
            style={[
              styles.thumbnail,
              img.url === selectedImage ? styles.selectedThumbnail : {},
            ]}
          />
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    display: 'flex',
    flexDirection: 'row',
    paddingVertical: 10,
    width: '100%',
  },
  thumbnail: {
    width: 50,
    height: 60,
    marginRight: 10,
    borderWidth: 2,
    borderColor: 'transparent',
    borderRadius: css.borderRadiusMax,
  },
  selectedThumbnail: {
    borderColor: 'purple',
  },
});
