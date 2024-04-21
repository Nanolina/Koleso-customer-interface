import { Octicons } from '@expo/vector-icons';
import React, { useCallback } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { colors, sizes } from '../consts';
import { IButtonProps } from '../types';

export const ButtonBack: React.FC<IButtonProps> = React.memo(
  ({ navigation, onPress, width, style }: any) => {
    const handlePress = useCallback(() => {
      if (onPress) {
        onPress();
      } else {
        navigation.goBack();
      }
    }, [onPress, navigation]);

    return (
      <TouchableOpacity
        onPress={handlePress}
        style={[styles.container, { width: width || 50 }]}
      >
        <Octicons
          name="chevron-left"
          size={sizes.iconSizeMax}
          color={colors.white}
          style={style}
        />
      </TouchableOpacity>
    );
  }
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
  },
});
