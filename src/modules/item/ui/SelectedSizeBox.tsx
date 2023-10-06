import { StyleSheet, Text } from 'react-native';
import { css } from '../../../consts';
import { Gradient } from '../../../ui/Gradient';

export const SelectedSizeBox = ({ size }) => {
  return (
    <Gradient style={styles.gradientBox}>
      <Text style={styles.text}>{size}</Text>
    </Gradient>
  );
};

const styles = StyleSheet.create({
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
