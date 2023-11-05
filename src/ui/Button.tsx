import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { css } from '../consts';

export const Button = ({
  text,
  onPress,
  width,
  backgroundColor,
  border = false,
  textColor,
}: any) => {
  const styles = getStyles(width, backgroundColor, border, textColor);

  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

const getStyles = (width, backgroundColor, border, textColor) =>
  StyleSheet.create({
    container: {
      width: width || css.size.buttonWidth,
      borderRadius: css.borderRadiusMax,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 10,
      backgroundColor: backgroundColor || css.colors.main,
      ...(border && {
        borderWidth: 2,
        borderColor: css.colors.main,
      }),
    },
    text: {
      fontWeight: 'bold',
      fontSize: css.size.text16,
      textAlign: 'center',
      color: textColor || css.colors.white,
    },
  });
