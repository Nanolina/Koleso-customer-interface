import { Feather } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
import { colors, css } from '../../../consts';

export const IconFeather = ({ name }) => {
  return (
    <TouchableOpacity>
      <Feather name={name} size={css.iconSizeMiddle} color={colors.white} />
    </TouchableOpacity>
  );
};
