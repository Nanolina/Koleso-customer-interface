import { Feather } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
import { colors, sizes } from '../../../consts';

export const IconFeather = ({ name }) => {
  return (
    <TouchableOpacity>
      <Feather name={name} size={sizes.iconSizeMiddle} color={colors.white} />
    </TouchableOpacity>
  );
};
