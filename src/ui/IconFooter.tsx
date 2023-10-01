import { Icon } from 'react-native-elements';
import { css } from '../consts';

export const IconFooter = ({ name }) => (
  <Icon name={name} size={css.iconSize} color={css.colors.white} />
);
