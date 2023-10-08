import { Text } from 'react-native';
import { currency } from '../consts';

export const Price = ({ price, style }) => {
  return (
    <Text style={style}>
      {price} {currency}
    </Text>
  );
};
