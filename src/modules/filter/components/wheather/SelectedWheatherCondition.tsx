import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { css } from '../../../../consts';
import { Gradient } from '../../../../ui/Gradient';

const SelectedWheatherCondition = ({ condition }) => {
  return (
    <Gradient style={styles.gradientBox}>
      <Text style={styles.text}>{condition}</Text>
    </Gradient>
  );
};

const styles = StyleSheet.create({
  gradientBox: {
    alignItems: 'center',
    justifyContent: 'center',
    ...css.filter.wheather.box,
  },
  text: {
    fontWeight: 'bold',
    fontSize: css.size.text16,
  },
});

export default React.memo(SelectedWheatherCondition);
