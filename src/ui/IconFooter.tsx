import { Icon } from 'react-native-elements';
import { colors, sizes } from '../consts';

export const IconFooter = ({ name, active }) => (
  <Icon
    name={name}
    size={sizes.iconSizeMax}
    color={active ? colors.main : colors.gray}
  />
);
