import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { css } from '../consts';
import { Gradient } from './Gradient';

const colorsWithOpacity = [css.colors.pinkOpacity, css.colors.purpleOpacity];

export const Sign = ({ type }) => {
  return (
    <TouchableOpacity>
      <Gradient colors={colorsWithOpacity} style={styles.gradient}>
        <Text style={styles.sign}>{type}</Text>
      </Gradient>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  gradient: {
    borderRadius: css.borderRadiusMin,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  sign: {
    fontWeight: 'bold',
    fontSize: css.size.text20,
    color: css.colors.white,
  },
});
