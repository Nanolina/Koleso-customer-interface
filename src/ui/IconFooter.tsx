import { Icon } from 'react-native-elements';
import { css } from '../consts';

export const IconFooter = ({ name, active }) => (
  <Icon
    name={name}
    size={css.iconSizeMax}
    color={active ? css.colors.main : css.colors.gray}
  />
);
