import { MaterialIcons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
import { colors, css } from '../consts';

export const Icon = ({ name }) => {
  return (
    <TouchableOpacity>
      <MaterialIcons name={name} size={css.iconSizeMax} color={colors.main} />
    </TouchableOpacity>
  );
};
