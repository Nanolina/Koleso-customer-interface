import { LinearGradient } from 'expo-linear-gradient';
import { Platform, StyleSheet, View } from 'react-native';
import { Icon } from 'react-native-elements';
import {
  borderRadiusProductCard,
  colors,
  iconSize,
  iconSizeProductCard,
} from '../../../../consts';

export const IconProductCard = ({ name }) => {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={[colors.pink, colors.purple]}
        start={{ x: 1, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.background}
      >
        <Icon
          name={name}
          size={Platform.OS === 'web' ? iconSize : iconSizeProductCard}
          color={colors.white}
        />
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: borderRadiusProductCard,
    width: Platform.OS === 'web' ? 40 : 25,
    height: Platform.OS === 'web' ? 40 : 25,
    overflow: 'hidden',
  },
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
