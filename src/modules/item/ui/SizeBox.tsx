import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { css } from '../../../consts';

export const SizeBox = ({ size, isStyleBox, isMissingSize = false }: any) => {
  return isStyleBox ? (
    <TouchableOpacity style={isMissingSize ? styles.missingBox : styles.box}>
      <Text style={styles.text}>{size}</Text>
    </TouchableOpacity>
  ) : (
    <Text style={styles.text}>{size}</Text>
  );
};

const styles = StyleSheet.create({
  box: {
    borderRadius: 1,
    backgroundColor: css.colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    ...css.item.gradientBoxSize,
  },
  text: {
    fontSize: css.size.text16,
  },
  missingBox: {
    borderRadius: css.borderRadius,
    backgroundColor: 'rgba(0,0,0,0.1)',
    alignItems: 'center',
    justifyContent: 'center',
    ...css.item.boxSize,
  },
});
