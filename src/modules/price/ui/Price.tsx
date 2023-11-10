import React from 'react';
import { Text } from 'react-native';
import { currency } from '../../../consts';
import { IPriceProps } from '../types';

export const Price: React.FC<IPriceProps> = React.memo(({ price, style }) => {
  return (
    <Text style={style}>
      {price} {currency}
    </Text>
  );
});
