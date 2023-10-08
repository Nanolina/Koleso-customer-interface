import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { css } from '../consts';

export const ButtonGreen = ({ text, onPress, width }: any) => {
  const styles = getStyles(width);
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

const getStyles = (width) =>
  StyleSheet.create({
    container: {
      borderRadius: css.borderRadiusMax,
      alignItems: 'center',
      backgroundColor: css.colors.lightGreen,
      width: width || css.size.buttonWidth,
      padding: 10,
    },
    text: {
      fontWeight: 'bold',
      fontSize: css.size.text16,
    },
  });
