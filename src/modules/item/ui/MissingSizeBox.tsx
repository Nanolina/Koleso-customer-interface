import { StyleSheet, Text, View } from 'react-native';
import { css } from '../../../consts';

export const MissingSizeBox = ({ size }) => {
  return (
    <View style={styles.box}>
      <Text style={styles.text}>{size}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
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
