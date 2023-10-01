import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet } from 'react-native';
import { colors, padding } from '../../../../consts';

export const Gradient = ({ children }) => {
  return (
    <LinearGradient
      colors={[colors.pink, colors.purple]}
      style={styles.background}
      start={{ x: 1, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
      {children}
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  background: {
    padding: padding,
  },
});
