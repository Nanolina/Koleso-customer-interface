import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { css } from '../../../consts';

export const SizeBox = ({ size, isStyleBox }) => {
  return isStyleBox ? (
    <TouchableOpacity style={styles.box}>
      <Text style={styles.text}>{size}</Text>
    </TouchableOpacity>
  ) : (
    <Text style={styles.text}>{size}</Text>
  );
};

const styles = StyleSheet.create({
  box: {
    borderColor: 'transparent',
    borderRadius: css.borderRadius,
    backgroundColor: 'rgba(0,0,0,0.1)',
    alignItems: 'center',
    justifyContent: 'center',
    ...css.item.boxSize,
  },
  text: {
    fontSize: css.size.text16,
  },
});
