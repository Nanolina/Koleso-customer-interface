import { useNavigation } from '@react-navigation/native';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { css } from '../../../consts';
import { ButtonBack } from '../../../ui/ButtonBack';
import { IconFeather } from '../ui/IconFeather';

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
    flex: 1,
    position: 'absolute',
    right: 5,
    top: 5,
    backgroundColor: 'rgba(223, 218, 218, 0.55)',
    padding: 10,
    gap: 15,
    borderRadius: css.borderRadius,
  },
  iconBack: {
    position: 'absolute',
    left: 10,
    top: 5,
    backgroundColor: 'rgba(223, 218, 218, 0.55)',
    borderRadius: css.borderRadius,
    padding: 10,
  },
});
