import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { css } from '../../../consts';
import { ButtonGradient } from '../../../ui/ButtonGradient';
import { data } from '../data';
import { Card } from './Card';

export const SignUp: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.cardsContainer}>
        {data.map((card) => (
          <Card card={card} key={card.id} />
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
    gap: 50,
  },
  cardsContainer: {
    gap: 30,
    justifyContent: 'center',
    paddingHorizontal: css.padding,
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
