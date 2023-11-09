import { StyleSheet, TouchableOpacity } from 'react-native';
import { IIconContainerProps } from '../types';
import { IconProductCard } from '../ui/IconProductCard';
import { useMemo } from 'react';

export const IconContainer: React.FC<IIconContainerProps> = ({
  name,
  type,
}) => {
  const styles = useMemo(() => getStyles(type), [type]);

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
