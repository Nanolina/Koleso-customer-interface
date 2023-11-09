import { StyleSheet, View } from 'react-native';
import { IFinanceProps, finances } from '../../../../mockData';
import { Finance } from './Finance';

export const Finances: React.FC = () => {
  return (
    <View style={styles.container}>
      {finances.map((finance: IFinanceProps) => (
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
