import React from 'react';
import { Dimensions, Platform, StyleSheet, View } from 'react-native';
import { Image } from 'react-native-elements';
import Swiper from 'react-native-swiper';
import { colors, css } from '../../../../consts';
import { IImage } from '../../types';

const { height } = Dimensions.get('window');
const imageHeight = height / 2;

export const ImageContainer: React.FC<{ images: IImage[] }> =
  React.memo(({ images }) => {
    return (
      <View style={styles.container}>
        <Swiper
          height={imageHeight}
          dotStyle={styles.dot}
          activeDotStyle={styles.activeDot}
        >
          {images.map((img, index) => (
            <Image
              key={index}
              source={{ uri: img.url }}
              style={styles.image}
              resizeMode="cover"
            />
          ))}
        </Swiper>
      </View>
    );
  });

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    ...(Platform.OS === 'web' && {
      paddingVertical: css.padding,
    }),
  },
  image: {
    width: '100%',
    height: '100%',
  },
  dot: {
    backgroundColor: 'rgba(0,0,0,.2)',
    width: 8,
    height: 8,
    borderRadius: 4,
    marginLeft: 3,
    marginRight: 3,
  },
  activeDot: {
    backgroundColor: colors.main,
    width: 8,
    height: 8,
    borderRadius: 4,
    marginLeft: 3,
    marginRight: 3,
  },
});
