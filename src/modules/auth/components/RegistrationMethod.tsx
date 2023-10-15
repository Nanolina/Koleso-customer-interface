import { useNavigation } from '@react-navigation/native';
import { Image, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { css } from '../../../consts';

export const RegistrationMethod = ({ registrationMethod }) => {
  const navigation: any = useNavigation();

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate(registrationMethod.redirectPage)}
    >
      <Image source={registrationMethod.image} style={styles.image} />
      <Text style={styles.text}>{registrationMethod.text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: css.colors.main,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
    borderRadius: css.borderRadiusMax,
    padding: css.padding,
  },
  text: {
    fontSize: css.size.text18,
    fontWeight: 'bold',
  },
  image: {
    width: 40,
    height: 40,
  },
});
