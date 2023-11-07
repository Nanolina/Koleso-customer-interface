import { MaterialIcons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
import { colors, sizes } from '../consts';

export const Icon = ({ name }) => {
  return (
    <TouchableOpacity>
      <MaterialIcons name={name} size={sizes.iconSizeMax} color={colors.main} />
    </TouchableOpacity>
  );
};
