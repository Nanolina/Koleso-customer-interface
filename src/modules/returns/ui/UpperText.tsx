import { StyleSheet, Text, View } from 'react-native';

export const UpperText = ({ number, date }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>№{number}</Text>
      <Text>
        Return request from <Text style={styles.text}>{date}</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    fontWeight: 'bold',
  },
});
