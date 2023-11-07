import { StyleSheet, Text } from 'react-native';
import { sizes } from '../../../consts';

export const Property = ({ label, text }: any) => {
  return (
    <Text style={styles.text}>
      <Text style={styles.label}>{label}</Text> {text}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: sizes.text16,
  },
  label: {
    fontWeight: 'bold',
  },
});
