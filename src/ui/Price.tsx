import React from 'react';
import { Text, TextStyle } from 'react-native';
import { currency } from '../consts';

interface IPriceProps {
  price: number;
  style: TextStyle;
}

export const Price: React.FC<IPriceProps> = React.memo(({ price, style }) => {
  return (
    <Text style={style}>
      {price} {currency}
    </Text>
  );
});
