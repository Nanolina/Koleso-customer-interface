import React from 'react';
import { StyleSheet, View } from 'react-native';
import { colors } from '../consts';

export const Hr: React.FC = () => {
  return <View style={styles.line} />;
};

const styles = StyleSheet.create({
  line: {
    height: 1,
    backgroundColor: colors.lightGray,
  },
});
