import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { css } from '../../../../consts';

const SelectedWheatherCondition = ({ condition }) => {
  return <Text style={styles.text}>{condition}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontWeight: 'bold',
    fontSize: css.size.text16,
  },
});

export default React.memo(SelectedWheatherCondition);
