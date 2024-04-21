import { useNavigation } from '@react-navigation/native';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { css, headerHeight } from '../../../../consts';
import { ButtonBack } from '../../../../ui/ButtonBack';
import { IconFeather } from '../../ui/IconFeather';

const top = headerHeight + 10;

export const ProductIconsContainer: React.FC = () => {
  const navigation = useNavigation();

  return (
    <>
      <TouchableOpacity style={styles.iconBack}>
        <ButtonBack navigation={navigation} style={styles.iconWithShadow} />
      </TouchableOpacity>
      <View style={styles.iconContainer}>
        <IconFeather name="heart" style={styles.iconWithShadow} />
        <IconFeather name="share" style={styles.iconWithShadow} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    top,
    right: 5,
    position: 'absolute',
    zIndex: 1,
    padding: 5,
    gap: 20,
    borderRadius: css.borderRadiusMax,
    flexDirection: 'row',
    backgroundColor: 'transparent',
  },
  iconWithShadow: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  iconBack: {
    top,
    position: 'absolute',
    left: 15,
    zIndex: 1,
  },
});
