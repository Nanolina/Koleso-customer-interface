import { StyleSheet, Text } from 'react-native';

export const Detail = ({ name, detail }) => {
  return (
    <Text>
      {name}: <Text style={styles.text}>{detail}</Text>
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    fontWeight: 'bold',
  },
});
