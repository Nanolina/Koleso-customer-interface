import { useNavigation } from '@react-navigation/native';
import React, { useCallback } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { colors, css, sizes } from '../../../consts';
import { IRegistrationMethodProps } from '../types';

const RegistrationMethod: React.FC<IRegistrationMethodProps> = React.memo(
  ({ registrationMethod }) => {
    const navigation: any = useNavigation();

    const handlePress = useCallback(() => {
      navigation.navigate(registrationMethod.redirectPage);
    }, [navigation]);

    return (
      <TouchableOpacity style={styles.container} onPress={handlePress}>
        <Image source={registrationMethod.image} style={styles.image} />
        <Text style={styles.text}>{registrationMethod.text}</Text>
      </TouchableOpacity>
    );
  }
);

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: colors.main,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
    borderRadius: css.borderRadiusMax,
    padding: css.padding,
  },
  text: {
    fontSize: sizes.text18,
    fontWeight: 'bold',
  },
  image: {
    width: 40,
    height: 40,
  },
});

export default React.memo(RegistrationMethod);
