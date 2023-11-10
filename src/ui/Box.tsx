import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { css, sizes } from '../consts';
import { IBoxProps } from '../types';

export const Box: React.FC<IBoxProps> = React.memo(
  ({ label, onPress, boxStyle, textStyle }) => {
    return (
      <TouchableOpacity
        style={[styles.box, boxStyle]}
        onPress={onPress}
        disabled={!onPress} // disable pressing if there is no handler
      >
        <Text style={[styles.text, textStyle]}>{label}</Text>
      </TouchableOpacity>
    );
  }
);

const styles = StyleSheet.create({
  box: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    borderRadius: css.borderRadiusMin,
  },
  text: {
    fontSize: sizes.text16,
  },
});
