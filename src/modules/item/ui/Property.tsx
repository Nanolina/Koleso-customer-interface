import { StyleSheet, Text } from 'react-native';
import { css } from '../../../consts';

export const Property = ({ label, text }) => {
  return (
    <Text style={styles.text}>
      <Text style={styles.label}>{label}</Text> {text}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: css.size.text16,
  },
  label: {
    fontWeight: 'bold',
  },
});
