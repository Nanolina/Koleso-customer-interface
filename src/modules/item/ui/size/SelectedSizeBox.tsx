import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { css } from '../../../../consts';
import { Gradient } from '../../../../ui/Gradient';

const SelectedSizeBox = ({ size }) => {
  return (
    <Gradient style={styles.gradientBox}>
      <Text style={styles.text}>{size}</Text>
    </Gradient>
  );
};

const styles = StyleSheet.create({
  gradientBox: {
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
