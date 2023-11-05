import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { css } from '../../../../consts';

const SizeBox = ({ size }) => {
  return (
    <TouchableOpacity style={styles.box}>
      <Text style={styles.text}>{size}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  box: {
    backgroundColor: css.colors.white,
    borderColor: css.colors.main,
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
    ...css.item.size.box,
  },
  text: {
    fontWeight: 'bold',
    fontSize: css.size.text16,
  },
});

export default React.memo(SizeBox);
