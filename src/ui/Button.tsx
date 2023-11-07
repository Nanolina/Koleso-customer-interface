import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { colors, css } from '../consts';

export const Button = ({
  text,
  onPress,
  width,
  backgroundColor,
  border = false,
  textColor,
  isBold = true,
  extra,
}: any) => {
  const styles = getStyles(width, backgroundColor, border, textColor, isBold);

  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text style={styles.text}>{text}</Text>
      {extra && <Text style={styles.extra}>{extra}</Text>}
    </TouchableOpacity>
  );
};

const getStyles = (width, backgroundColor, border, textColor, isBold) =>
  StyleSheet.create({
    container: {
      width: width || '100%',
      borderRadius: css.borderRadiusMax,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 10,
      backgroundColor: backgroundColor || colors.orange,
      ...(border && {
        borderWidth: 1,
        borderColor: colors.main,
      }),
    },
    text: {
      fontWeight: isBold ? 'bold' : 'normal',
      fontSize: css.size.text16,
      textAlign: 'center',
      color: textColor || colors.white,
    },
    extra: {
      fontSize: css.size.text15,
      color: colors.white,
    },
  });
