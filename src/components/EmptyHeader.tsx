import React from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';

const { height } = Dimensions.get('window');
// Also use in IconContainer
export const headerHeight = height * 0.06;

export const EmptyHeader = () => {
  return <View style={styles.container}></View>;
};

const styles = StyleSheet.create({
  container: {
    height: headerHeight,
  },
});
