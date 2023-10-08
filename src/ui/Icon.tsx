import { MaterialIcons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
import { css } from '../consts';

export const Icon = ({ name }) => {
  return (
    <TouchableOpacity>
      <MaterialIcons
        name={name}
        size={css.iconSizeMax}
        color={css.colors.main}
      />
    </TouchableOpacity>
  );
};
