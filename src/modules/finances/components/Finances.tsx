import { View } from 'react-native';
import { finances } from '../../../../mockData';
import { css } from '../../../consts';
import { IFinanceProps } from '../types';
import { Finance } from './Finance';

export const Finances: React.FC = () => {
  return (
    <View style={css.shadowContainer}>
      {finances.map((finance: IFinanceProps) => (
        <Finance finance={finance} key={finance.id} />
      ))}
    </View>
  );
};
