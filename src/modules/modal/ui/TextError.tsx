import { StyleSheet, Text, View } from 'react-native';
import { css } from '../../../consts';

export const TextError = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sorry</Text>
      <Text style={styles.text}>There was an error</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: css.size.title,
    fontWeight: 'bold',
    color: css.colors.yellow,
  },
  text: {
    fontSize: css.size.text16,
    fontWeight: 'bold',
    color: css.colors.yellow,
  },
});
