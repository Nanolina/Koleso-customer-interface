import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import { toggleWheatherCondition } from '../../../../../redux/slices/filterSlice';
import { css } from '../../../../consts';

const WheatherCondition = ({ condition }) => {
  const dispatch = useDispatch();

  return (
    <TouchableOpacity
      style={styles.box}
      onPress={() => dispatch(toggleWheatherCondition(condition))}
    >
      <Text style={styles.text}>{condition}</Text>
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

export default React.memo(WheatherCondition);
