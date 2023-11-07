import { StyleSheet, Text, View } from 'react-native';
import { sizes } from '../../../consts';

export const WorkingDay = ({ text, hours }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
      <Text style={styles.text}>{hours}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    fontSize: sizes.text16,
  },
});
