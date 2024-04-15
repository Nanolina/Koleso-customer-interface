import React from 'react';
import { Platform, StyleSheet, View } from 'react-native';
import { Icon } from 'react-native-elements';
import { colors, sizes } from '../../../consts';
import { IIconProductCardProps } from '../types';

export const IconProductCard: React.FC<IIconProductCardProps> = React.memo(
  ({ name }) => {
    return (
      <View style={styles.container}>
        <Icon
          name={name}
          size={Platform.OS === 'web' ? sizes.iconSizeMax : 18}
          color={colors.white}
        />
      </View>
    );
  }
);

const styles = StyleSheet.create({
  container: {
    borderRadius: 5,
    width: Platform.OS === 'web' ? 40 : 25,
    height: Platform.OS === 'web' ? 40 : 25,
    overflow: 'hidden',
    backgroundColor: colors.grayOpacity,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
