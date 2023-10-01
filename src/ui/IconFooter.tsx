import { Icon } from 'react-native-elements';
import { colors, iconSize } from '../consts';

export const IconFooter = ({ name }) => (
  <Icon name={name} size={iconSize} color={colors.white} />
);
