import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { css } from '../../../../consts';
import { Gradient } from '../../../../ui/Gradient';

const SizeBox = ({ size }) => {
  return (
    <Gradient style={styles.gradientBox}>
      <TouchableOpacity style={styles.box}>
        <Text style={styles.text}>{size}</Text>
      </TouchableOpacity>
    </Gradient>
  );
};

const styles = StyleSheet.create({
  gradientBox: {
    alignItems: 'center',
    justifyContent: 'center',
    ...css.item.size.box,
  },
  box: {
    backgroundColor: css.colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    ...css.item.size.gradientBox,
  },
  text: {
    fontWeight: 'bold',
    fontSize: css.size.text16,
  },
});

export default React.memo(SizeBox);
