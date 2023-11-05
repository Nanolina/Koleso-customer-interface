import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { css } from '../../../../consts';

const SelectedSizeBox = ({ size }) => {
  return (
    <TouchableOpacity style={styles.box}>
      <Text style={styles.text}>{size}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  box: {
    backgroundColor: css.colors.main,
    alignItems: 'center',
    justifyContent: 'center',
    ...css.item.size.box,
  },
  text: {
    fontWeight: 'bold',
    fontSize: css.size.text16,
  },
});

export default React.memo(SelectedSizeBox);
