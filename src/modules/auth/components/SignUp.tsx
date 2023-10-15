import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { css } from '../../../consts';
import { ButtonGradient } from '../../../ui/ButtonGradient';
import { registrationMethods } from '../data';
import { RegistrationMethod } from './RegistrationMethod';

export const SignUp: React.FC = () => {
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
          <ButtonGradient text="Log in" />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    gap: css.signUp.gapBetweenButton,
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
