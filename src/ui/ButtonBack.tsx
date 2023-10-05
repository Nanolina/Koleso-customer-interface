import { Octicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
import { css } from '../consts';

export const ButtonBack = ({ navigation, onPress }: any) => {
  return (
    <TouchableOpacity onPress={onPress ? onPress : () => navigation.goBack()}>
      <Octicons
        name="chevron-left"
        size={css.iconSizeMax}
        color={css.colors.white}
      />
    </TouchableOpacity>
  );
};
