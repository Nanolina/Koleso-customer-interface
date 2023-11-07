import { Octicons } from '@expo/vector-icons';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { colors, css } from '../consts';

export const ButtonBack = ({ navigation, onPress, width }: any) => {
  const styles = getStyles(width);

  return (
    <TouchableOpacity
      onPress={onPress ? onPress : () => navigation.goBack()}
      style={styles.container}
    >
      <Octicons
        name="chevron-left"
        size={css.iconSizeMax}
        color={colors.white}
      />
    </TouchableOpacity>
  );
};

const getStyles = (width) =>
  StyleSheet.create({
    container: {
      backgroundColor: 'transparent',
      width: width || 50,
    },
  });
