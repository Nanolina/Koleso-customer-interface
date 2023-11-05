import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { css } from '../../../consts';
import { Button } from '../../../ui/Button';
import { registrationMethods } from '../data';
import { RegistrationMethod } from './RegistrationMethod';

export const SignUp: React.FC = () => {
  const navigation: any = useNavigation();

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
        <Text style={styles.text}>Already have an account?</Text>
        <View>
          <Button
            text="Log in"
            onPress={() => navigation.navigate('LoginPage')}
          />
        </View>
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
  },
  text: {
    fontWeight: 'bold',
    fontSize: css.size.text20,
  },
  logInContainer: {
    gap: 20,
    alignItems: 'center',
  },
});
