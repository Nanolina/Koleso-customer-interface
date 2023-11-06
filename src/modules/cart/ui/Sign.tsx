import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { css } from '../../../consts';

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
    backgroundColor: css.colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: css.borderRadiusMin,
  },
  sign: {
    fontWeight: 'bold',
    fontSize: css.size.text18,
    color: css.colors.main,
  },
});
