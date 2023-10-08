import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { css } from '../consts';
import { Gradient } from './Gradient';

export const ButtonWithBorder = ({ text, onPress }) => {
  return (
    <Gradient style={styles.gradientBox}>
      <TouchableOpacity style={styles.box} onPress={onPress}>
        <Text style={styles.text}>{text}</Text>
      </TouchableOpacity>
    </Gradient>
  );
};

const styles = StyleSheet.create({
  gradientBox: {
    alignItems: 'center',
    justifyContent: 'center',
    ...css.box,
  },
  box: {
    backgroundColor: css.colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    ...css.gradientBox,
  },
  text: {
    fontWeight: 'bold',
    fontSize: css.size.text16,
  },
});
