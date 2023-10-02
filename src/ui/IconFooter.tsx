import { Icon } from 'react-native-elements';
import { css } from '../consts';

export const IconFooter = ({ name }) => (
  <Icon name={name} size={css.iconSizeMax} color={css.colors.white} />
);
