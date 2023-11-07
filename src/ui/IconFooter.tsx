import { Icon } from 'react-native-elements';
import { colors, css } from '../consts';

export const IconFooter = ({ name, active }) => (
  <Icon
    name={name}
    size={css.iconSizeMax}
    color={active ? colors.main : colors.gray}
  />
);
