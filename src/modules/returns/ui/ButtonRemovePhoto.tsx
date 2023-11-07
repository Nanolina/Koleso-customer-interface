import { Entypo } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { colors, sizes } from '../../../consts';

export const ButtonRemovePhoto = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.circle} onPress={onPress}>
      <Entypo name="cross" size={sizes.iconSizeMin} color={colors.white} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  circle: {
    backgroundColor: colors.lightGray,
    borderRadius: 20,
    position: 'absolute',
    top: -7,
    right: -7,
  },
});
