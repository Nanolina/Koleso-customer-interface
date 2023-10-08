import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { css } from '../consts';
import { Gradient } from './Gradient';

export const ButtonGradient = ({ text, onPress, style, width }: any) => {
  const styles = getStyles(width);

  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Gradient style={style ? [styles.container, style] : styles.container}>
        <Text style={styles.text}>{text}</Text>
      </Gradient>
    </TouchableOpacity>
  );
};

const getStyles = (width) =>
  StyleSheet.create({
    container: {
      borderRadius: css.borderRadiusMax,
      alignItems: 'center',
      width: width || css.size.buttonWidth,
    },
    text: {
      fontWeight: 'bold',
      fontSize: css.size.text16,
    },
  });
