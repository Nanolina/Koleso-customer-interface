import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { css } from '../consts';

export const ButtonGreen = ({ text, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: css.borderRadius,
    alignItems: 'center',
    backgroundColor: css.colors.lightGreen,
    width: css.size.buttonWidth,
    padding: 10,
  },
  text: {
    fontWeight: 'bold',
    fontSize: css.size.text16,
  },
});
