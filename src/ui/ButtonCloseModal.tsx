import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { css } from '../consts';

export const ButtonCloseModal = ({ onPress }: any) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Ionicons name="close" size={css.iconSizeMax} color={css.colors.main} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignSelf: 'flex-end'
  },
});
