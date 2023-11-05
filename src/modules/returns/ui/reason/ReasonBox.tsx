import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { css } from '../../../../consts';

const ReasonBox = ({ reason, onPress }) => {
  return (
    <TouchableOpacity style={styles.box} onPress={onPress}>
      <Text style={styles.text}>{reason}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  box: {
    backgroundColor: css.colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontWeight: 'bold',
    fontSize: css.size.text16,
  },
});

export default React.memo(ReasonBox);
