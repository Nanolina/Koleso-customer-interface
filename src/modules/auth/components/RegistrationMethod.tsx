import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native';
import React, { useCallback } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { css, sizes } from '../../../consts';
import { IRegistrationMethodProps } from '../types';

const RegistrationMethod: React.FC<IRegistrationMethodProps> = React.memo(
  ({ registrationMethod }) => {
    const navigation: NavigationProp<ParamListBase> = useNavigation();

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
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
    borderRadius: css.borderRadiusMax,
    padding: css.padding,
    ...css.shadow,
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
