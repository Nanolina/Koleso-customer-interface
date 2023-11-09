import React from 'react';
import { Platform, StyleSheet, View } from 'react-native';
import { Icon } from 'react-native-elements';
import { colors, css, sizes } from '../../../consts';
import { IIconProductCardProps } from '../types';

export const IconProductCard: React.FC<IIconProductCardProps> = React.memo(
  ({ name }) => {
    return (
      <View style={styles.container}>
        <Icon
          name={name}
          size={
            Platform.OS === 'web' ? sizes.iconSizeMax : css.productCard.iconSize
          }
          color={colors.white}
        />
      </View>
    );
  }
);

const styles = StyleSheet.create({
  container: {
    borderRadius: css.productCard.borderRadius,
    width: Platform.OS === 'web' ? 40 : 25,
    height: Platform.OS === 'web' ? 40 : 25,
    overflow: 'hidden',
    backgroundColor: colors.grayOpacity,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
