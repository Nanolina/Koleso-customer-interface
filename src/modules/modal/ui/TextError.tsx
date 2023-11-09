import { StyleSheet, Text, View } from 'react-native';
import { colors, sizes } from '../../../consts';

export const TextError: React.FC = () => {
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
    fontSize: sizes.title,
    fontWeight: 'bold',
    color: colors.yellow,
  },
  text: {
    fontSize: sizes.text16,
    fontWeight: 'bold',
    color: colors.yellow,
  },
});
