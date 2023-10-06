import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { css } from '../../../consts';
import { Gradient } from '../../../ui/Gradient';

export const SizeBox = ({ size }) => {
  return (
    <Gradient style={styles.gradientBox}>
      <TouchableOpacity style={styles.box}>
        <Text style={styles.text}>{size}</Text>
      </TouchableOpacity>
    </Gradient>
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
  gradientBox: {
    borderRadius: css.item.gradientBoxSize.borderRadius,
    alignItems: 'center',
    justifyContent: 'center',
    ...css.item.boxSize,
  },
});
