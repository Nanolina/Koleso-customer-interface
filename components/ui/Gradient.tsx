import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet } from 'react-native';
import { borderRadius, colors } from '../../assets/css';

export const Gradient = ({ type }) => {
  const styles = getStyles(type);

  return (
    <LinearGradient
      colors={[colors.pink, colors.purple]}
      style={styles.gradientBackground}
      start={{ x: 1, y: 0 }}
      end={{ x: 1, y: 1 }}
    />
  );
};

const getStyles = (type): any =>
  StyleSheet.create({
    gradientBackground: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      opacity: 0.55,
      ...(type === 'header' && {
        borderBottomLeftRadius: borderRadius,
        borderBottomRightRadius: borderRadius,
      }),
      ...(type === 'footer' && {
        borderTopLeftRadius: borderRadius,
        borderTopRightRadius: borderRadius,
      }),
    },
  });
