import { MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { TouchableOpacity } from 'react-native';
import { colors, sizes } from '../consts';
import { IIconProps } from '../types';

export const Icon: React.FC<IIconProps> = React.memo(({ name }) => {
  return (
    <TouchableOpacity>
      <MaterialIcons name={name} size={sizes.iconSizeMax} color={colors.main} />
    </TouchableOpacity>
  );
});
