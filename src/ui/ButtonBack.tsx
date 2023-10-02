import { Octicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
import { css } from '../consts';

export const ButtonBack = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Octicons
        name="chevron-left"
        size={css.iconSizeMax}
        color={css.colors.white}
      />
    </TouchableOpacity>
  );
};
