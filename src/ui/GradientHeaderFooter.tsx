import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet } from 'react-native';
import { css } from '../consts';

export const GradientHeaderFooter = ({ type, isBorder }) => {
  const styles = getStyles(type, isBorder);

  return (
    <LinearGradient
      colors={[css.colors.pink, css.colors.purple]}
      style={styles.background}
      start={{ x: 1, y: 0 }}
      end={{ x: 1, y: 1 }}
    />
  );
};

const getStyles = (type, isBorder): any =>
  StyleSheet.create({
    background: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      opacity: 0.55,
      ...(type === 'header' &&
        isBorder && {
          borderBottomLeftRadius: css.borderRadiusMax,
          borderBottomRightRadius: css.borderRadiusMax,
        }),
      ...(type === 'footer' &&
        isBorder && {
          borderTopLeftRadius: css.borderRadiusMax,
          borderTopRightRadius: css.borderRadiusMax,
        }),
    },
  });
