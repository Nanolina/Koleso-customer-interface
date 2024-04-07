import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native';
import React, { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { StyleSheet, Text, View } from 'react-native';
import { css, sizes } from '../../../consts';
import { Button } from '../../../ui/Button';
import { registrationMethods } from '../data';
import RegistrationMethod from './RegistrationMethod';

export const SignUp: React.FC = () => {
  const { t } = useTranslation();
  const navigation: NavigationProp<ParamListBase> = useNavigation();

  const handlePressLogin = useCallback(() => {
    navigation.navigate('LoginPage');
  }, [navigation]);

  return (
    <View style={styles.container}>
      <View style={styles.cardsContainer}>
        {registrationMethods.map((registrationMethod) => (
          <RegistrationMethod
            registrationMethod={registrationMethod}
            key={registrationMethod.id}
          />
        ))}
      </View>

      <View style={styles.logInContainer}>
        <Text style={styles.text}>{t('auth.haveAccount')}</Text>
        <Button text={t('auth.logIn')} onPress={handlePressLogin} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    gap: css.auth.gap,
  },
  cardsContainer: {
    gap: 30,
    justifyContent: 'center',
    width: '90%',
  },
  text: {
    fontWeight: 'bold',
    fontSize: sizes.text20,
  },
  logInContainer: {
    gap: 20,
    alignItems: 'center',
    width: '90%',
  },
});
