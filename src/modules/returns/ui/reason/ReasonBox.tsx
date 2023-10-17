import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { css } from '../../../../consts';
import { Gradient } from '../../../../ui/Gradient';

const ReasonBox = ({ reason, onPress }) => {
  return (
    <Gradient style={styles.gradientBox}>
      <TouchableOpacity style={styles.box} onPress={onPress}>
        <Text style={styles.text}>{reason}</Text>
      </TouchableOpacity>
    </Gradient>
  );
};

const styles = StyleSheet.create({
  gradientBox: {
    alignItems: 'center',
    justifyContent: 'center',
    ...css.return.reason.box,
  },
  box: {
    backgroundColor: css.colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    ...css.return.reason.gradientBox,
  },
  text: {
    fontWeight: 'bold',
    fontSize: css.size.text16,
  },
});

export default React.memo(ReasonBox);
