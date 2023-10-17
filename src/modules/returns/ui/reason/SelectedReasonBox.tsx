import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { css } from '../../../../consts';
import { Gradient } from '../../../../ui/Gradient';

const SelectedReasonBox = ({ reason }) => {
  return (
    <Gradient style={styles.gradientBox}>
      <Text style={styles.text}>{reason}</Text>
    </Gradient>
  );
};

const styles = StyleSheet.create({
  gradientBox: {
    alignItems: 'center',
    justifyContent: 'center',
    ...css.return.reason.box,
  },
  text: {
    fontWeight: 'bold',
    fontSize: css.size.text16,
  },
});

export default React.memo(SelectedReasonBox);
