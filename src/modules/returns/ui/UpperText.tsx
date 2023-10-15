import { StyleSheet, Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import { myRequests } from '../../../../consts';

export const UpperText = ({ number, date }) => {
  const { request } = useSelector((state: any) => state.return);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>№{number}</Text>
      <Text>
        {request === myRequests ? 'Return request from ' : 'Order from '}
        <Text style={styles.text}>{date}</Text>
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
