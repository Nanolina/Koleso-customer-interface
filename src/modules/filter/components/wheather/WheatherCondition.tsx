import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import { toggleWheatherCondition } from '../../../../../redux/slices/filterSlice';
import { css } from '../../../../consts';
import { Gradient } from '../../../../ui/Gradient';

const WheatherCondition = ({ condition }) => {
  const dispatch = useDispatch();

  return (
    <Gradient style={styles.gradientBox}>
      <TouchableOpacity
        style={styles.box}
        onPress={() => dispatch(toggleWheatherCondition(condition))}
      >
        <Text style={styles.text}>{condition}</Text>
      </TouchableOpacity>
    </Gradient>
  );
};

const styles = StyleSheet.create({
  gradientBox: {
    alignItems: 'center',
    justifyContent: 'center',
    ...css.filter.wheather.box,
  },
  box: {
    backgroundColor: css.colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    ...css.filter.wheather.gradientBox,
  },
  text: {
    fontWeight: 'bold',
    fontSize: css.size.text16,
  },
});

export default React.memo(WheatherCondition);
