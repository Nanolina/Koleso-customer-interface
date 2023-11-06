import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { css } from '../consts';

export const Button = ({
  text,
  onPress,
  width,
  backgroundColor,
  border = false,
  textColor,
  extra,
}: any) => {
  const styles = getStyles(width, backgroundColor, border, textColor);

  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text style={styles.text}>{text}</Text>
      {extra && <Text style={styles.extra}>{extra}</Text>}
    </TouchableOpacity>
  );
};

const getStyles = (width, backgroundColor, border, textColor) =>
  StyleSheet.create({
    container: {
      width: width || '100%',
      borderRadius: css.borderRadiusMax,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 10,
      backgroundColor: backgroundColor || css.colors.orange,
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
    extra: {
      fontSize: css.size.text15,
      color: css.colors.white,
    },
  });
