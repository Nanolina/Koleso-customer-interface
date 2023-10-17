import { StyleSheet, View } from 'react-native';
import { finances } from '../../../../mockData';
import { Finance } from './Finance';

export const Finances = () => {
  return (
    <View style={styles.container}>
      {finances.map((finance) => (
        <Finance finance={finance} key={finance.id} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 20,
  },
});
