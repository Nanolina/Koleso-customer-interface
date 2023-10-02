import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet } from 'react-native';
import { css } from '../consts';

export const GradientHeaderFooter = ({ type }) => {
  const styles = getStyles(type);

  return (
    <LinearGradient
      colors={[css.colors.pink, css.colors.purple]}
      style={styles.background}
      start={{ x: 1, y: 0 }}
      end={{ x: 1, y: 1 }}
    />
  );
};

const getStyles = (type): any =>
  StyleSheet.create({
    background: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      opacity: 0.55,
      ...(type === 'header' && {
        borderBottomLeftRadius: css.borderRadius,
        borderBottomRightRadius: css.borderRadius,
      }),
      ...(type === 'footer' && {
        borderTopLeftRadius: css.borderRadius,
        borderTopRightRadius: css.borderRadius,
      }),
    },
  });
