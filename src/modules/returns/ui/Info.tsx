import { StyleSheet, Text } from 'react-native';
import { css } from '../../../consts';

export const Info = ({ text, info }) => {
  return (
    <Text style={styles.italic}>
      {text}: <Text style={styles.bold}>{info}</Text>
    </Text>
  );
};

const styles = StyleSheet.create({
  italic: {
    fontSize: css.size.text15,
    fontStyle: 'italic',
    textAlign: 'left',
  },
  bold: {
    fontWeight: 'bold',
  },
});
