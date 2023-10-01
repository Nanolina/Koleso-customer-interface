import { StyleSheet, TouchableOpacity } from 'react-native';
import { IconProductCard } from '../../ui/productCard/IconProductCard';

export const IconContainer = ({ name, type }) => {
  const styles: any = getStyles(type);

  return (
    <TouchableOpacity style={styles.container}>
      <IconProductCard name={name} />
    </TouchableOpacity>
  );
};

const getStyles = (type: 'top' | 'bottom') =>
  StyleSheet.create({
    container: {
      position: 'absolute',
      right: 5,
      ...(type === 'top' && {
        top: 5,
      }),
      ...(type === 'bottom' && {
        bottom: 5,
      }),
    },
  });
