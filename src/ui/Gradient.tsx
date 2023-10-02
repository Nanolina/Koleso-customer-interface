import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet } from 'react-native';
import { css } from '../consts';

export const Gradient = ({ children, style = null }) => {
  return (
    <LinearGradient
      colors={[css.colors.pink, css.colors.purple]}
      style={style ? [styles.background, style] : styles.background}
      start={{ x: 1, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
      {children}
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  background: {
    padding: css.padding,
  },
});
