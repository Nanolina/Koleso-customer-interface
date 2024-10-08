import React from 'react';
import { StyleSheet } from 'react-native';
import { Image } from 'react-native-elements';
import { css } from '../consts';
import { IImageContainerProps } from '../types';

export const ImageContainer: React.FC<IImageContainerProps> = React.memo(
  ({ image }) => {
    return <Image source={{ uri: image }} style={styles.image} />;
  }
);

const styles = StyleSheet.create({
  image: {
    borderRadius: css.borderRadiusMax,
    width: 100,
    height: 100,
    resizeMode: 'cover',
  },
});
