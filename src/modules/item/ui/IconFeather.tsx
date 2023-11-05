import { Feather } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
import { css } from '../../../consts';

export const IconFeather = ({ name }) => {
  return (
    <TouchableOpacity>
      <Feather name={name} size={css.iconSizeMiddle} color={css.colors.white} />
    </TouchableOpacity>
  );
};
