import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { colors, css } from '../../../consts';

export const Button = ({ onPress, children }) => (
  <TouchableOpacity style={styles.container} onPress={onPress}>
    <Text style={styles.text}>{children}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderRadius: css.borderRadiusMin,
    backgroundColor: 'rgba(255,255,255,0.2)',
    alignItems: 'center',
  },
  text: {
    color: colors.white,
    fontWeight: 'bold',
    fontSize: css.size.text16,
  },
});
