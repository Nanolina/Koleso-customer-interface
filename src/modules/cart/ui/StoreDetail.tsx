import { StyleSheet, Text } from 'react-native';
import { css } from '../../../consts';

export const StoreDetail = ({ text, detail }) => {
  return (
    <Text style={styles.label}>
      {text}: <Text style={styles.text}>{detail}</Text>
    </Text>
  );
};

const styles = StyleSheet.create({
  label: {
    fontWeight: 'bold',
    fontSize: css.size.text16,
  },
  text: {
    fontWeight: 'normal',
    fontSize: css.size.text16,
  },
});
