import { Platform, StyleSheet, View } from 'react-native';
import { Icon } from 'react-native-elements';
import { css } from '../../../consts';

export const IconProductCard = ({ name }) => {
  return (
    <View style={styles.container}>
      <Icon
        name={name}
        size={
          Platform.OS === 'web' ? css.iconSizeMax : css.productCard.iconSize
        }
        color={css.colors.white}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: css.productCard.borderRadius,
    width: Platform.OS === 'web' ? 40 : 25,
    height: Platform.OS === 'web' ? 40 : 25,
    overflow: 'hidden',
    backgroundColor: css.colors.grayOpacity,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
