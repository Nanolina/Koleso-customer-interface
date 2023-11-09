import { Feather } from '@expo/vector-icons';
import React from 'react';
import { TouchableOpacity } from 'react-native';
import { colors, sizes } from '../../../consts';

interface IIconFeatherProps {
  name: any;
}

export const IconFeather: React.FC<IIconFeatherProps> = React.memo(
  ({ name }) => {
    return (
      <TouchableOpacity>
        <Feather name={name} size={sizes.iconSizeMiddle} color={colors.white} />
      </TouchableOpacity>
    );
  }
);
