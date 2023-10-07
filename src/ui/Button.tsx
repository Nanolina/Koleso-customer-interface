import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { css } from '../consts';
import { Gradient } from './Gradient';

export const Button = ({ text, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Gradient style={styles.container}>
        <Text style={styles.text}>{text}</Text>
      </Gradient>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: css.borderRadius,
    alignItems: 'center',
  },
  text: {
    fontWeight: 'bold',
    fontSize: css.size.text16,
  },
});
