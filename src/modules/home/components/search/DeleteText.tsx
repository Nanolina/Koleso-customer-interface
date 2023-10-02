import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { css } from '../../../../consts';

export const DeleteText = ({ query, handleClearQuery }) => {
  return (
    <TouchableOpacity onPress={() => handleClearQuery(query)}>
      <Text style={styles.text}>✕</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: css.size.text12,
    color: css.colors.gray,
  },
});
