import React from 'react';
import { Icon } from 'react-native-elements';
import { colors, sizes } from '../consts';
import { IIconFooterProps } from '../types';

export const IconFooter: React.FC<IIconFooterProps> = React.memo(
  ({ name, active }) => (
    <Icon
      name={name}
      size={sizes.iconSizeMax}
      color={active ? colors.main : colors.gray}
    />
  )
);
