import React from 'react';
import { StyleSheet, View } from 'react-native';
import { headerHeight } from '../consts';

export const EmptyHeader: React.FC = React.memo(() => {
  return <View style={styles.container}></View>;
});

const styles = StyleSheet.create({
  container: {
    height: headerHeight,
  },
});
