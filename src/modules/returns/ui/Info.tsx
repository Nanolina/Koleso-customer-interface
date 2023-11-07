import { StyleSheet, Text } from 'react-native';
import { sizes } from '../../../consts';

export const Info = ({ text, info }) => {
  return (
    <Text style={styles.italic}>
      {text}: <Text style={styles.bold}>{info}</Text>
    </Text>
  );
};

const styles = StyleSheet.create({
  italic: {
    fontSize: sizes.text15,
    fontStyle: 'italic',
    textAlign: 'left',
  },
  bold: {
    fontWeight: 'bold',
  },
});
