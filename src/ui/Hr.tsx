import React from 'react';
import { StyleSheet, View } from 'react-native';
import { css } from '../consts';

export const Hr = () => {
  return <View style={styles.line} />;
};

const styles = StyleSheet.create({
  line: {
    height: 1,
    backgroundColor: css.colors.lightGray,
  },
});
