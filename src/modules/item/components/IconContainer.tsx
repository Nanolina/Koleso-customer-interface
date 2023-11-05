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
    right: 5,
    position: 'absolute',
    zIndex: 1,
    padding: 5,
    gap: 20,
    borderRadius: css.borderRadiusMax,
    flexDirection: 'row',
  },
  iconBack: {
    top,
    position: 'absolute',
    left: 15,
    zIndex: 1,
  },
});
