import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { css } from '../../../../consts';

const SelectedReasonBox = ({ reason }) => {
  return <Text style={styles.text}>{reason}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontWeight: 'bold',
    fontSize: css.size.text16,
  },
});

export default React.memo(SelectedReasonBox);
