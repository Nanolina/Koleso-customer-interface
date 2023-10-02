import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { css } from '../../../../consts';

export const ClearAll = ({ handleClearAll }) => {
  return (
    <TouchableOpacity onPress={handleClearAll} style={styles.button}>
      <Text style={styles.text}>Clear all</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    alignSelf: 'flex-end',
    padding: 10,
  },
  text: {
    color: css.colors.gray,
  },
});
