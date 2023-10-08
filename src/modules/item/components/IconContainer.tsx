import { useNavigation } from '@react-navigation/native';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { headerHeight } from '../../../components/EmptyHeader';
import { css } from '../../../consts';
import { ButtonBack } from '../../../ui/ButtonBack';
import { IconFeather } from '../ui/IconFeather';

const top = headerHeight + 10;

export const IconContainer = () => {
  const navigation = useNavigation();

  return (
    <>
      <TouchableOpacity style={styles.iconBack}>
        <ButtonBack navigation={navigation} />
      </TouchableOpacity>
      <View style={styles.iconContainer}>
        <IconFeather name="heart" />
        <IconFeather name="share" />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    top,
    flex: 1,
    position: 'absolute',
    right: 5,
    backgroundColor: 'rgba(223, 218, 218, 0.55)',
    padding: 10,
    gap: 15,
    borderRadius: css.borderRadiusMax,
    zIndex: 1,
    width: 50,
  },
  iconBack: {
    top,
    position: 'absolute',
    left: 10,
    backgroundColor: 'rgba(223, 218, 218, 0.55)',
    borderRadius: css.borderRadiusMax,
    padding: 10,
    zIndex: 1,
    width: 50,
    alignItems: 'center',
  },
});
