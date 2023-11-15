import { StyleSheet, View } from 'react-native';
import { finances } from '../../../../mockData';
import { IFinanceProps } from '../types';
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
    gap: 10,
  },
});
