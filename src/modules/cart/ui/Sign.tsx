import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { colors, css } from '../../../consts';

export const Sign = ({ type }) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.sign}>{type}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 6,
    width: 30,
    margin: 3,
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: css.borderRadiusMin,
  },
  sign: {
    fontWeight: 'bold',
    fontSize: css.size.text18,
    color: colors.main,
  },
});
