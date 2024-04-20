import React from 'react';
import { Dimensions, Platform, StyleSheet, View } from 'react-native';
import { Image } from 'react-native-elements';
import Swiper from 'react-native-swiper';
import { useSelector } from 'react-redux';
import { colors, css } from '../../../../consts';
import { IRootState } from '../../../../redux/rootReducer';

const { height } = Dimensions.get('window');
const imageHeight = height / 2;

export const ImageContainer: React.FC = () => {
  const { selectedColorGroup } = useSelector(
    (state: IRootState) => state.products.product.colorPalette
  );

  return (
    <View style={styles.container}>
      <Swiper
        height={imageHeight}
        dotStyle={styles.dot}
        activeDotStyle={styles.activeDot}
      >
        {selectedColorGroup.images.map((image, index) => (
          <Image
            key={`${image}-${index}`}
            source={{ uri: image }}
            style={styles.image}
            resizeMode="cover"
          />
        ))}
      </Swiper>
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
