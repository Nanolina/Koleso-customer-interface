import { StyleSheet, TextInput } from 'react-native';
import { colors } from '../consts';
import { IValidationErrorProps } from '../types';

export const ValidationError = ({ error }: IValidationErrorProps) => {
  if (!error) {
    return null;
  }

  return <TextInput style={styles.text}>{error}</TextInput>;
};

const styles = StyleSheet.create({
  text: {
    color: colors.red,
  },
});
