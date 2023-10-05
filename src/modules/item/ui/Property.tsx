import { StyleSheet, Text } from 'react-native';

export const Property = ({ label, text }) => {
  return (
    <Text>
      <Text style={styles.label}>{label}</Text> {text}
    </Text>
  );
};

const styles = StyleSheet.create({
  label: {
    fontWeight: 'bold',
  },
});
