import { FontAwesome, Fontisto } from '@expo/vector-icons';
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { css } from '../../../consts';
import { ButtonGradient } from '../../../ui/ButtonGradient';
import { SignUpButton } from '../ui/SignUpButton';
import { ImageInput } from './ImageInput';

export const Login: React.FC = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <View style={css.auth.inputContainer}>
        <ImageInput
          placeholder="Email/username/phone"
          icon={
            <View style={styles.iconsContainer}>
              <Fontisto
                name="email"
                size={css.iconSizeMin}
                color={css.colors.mainOpacity}
              />
              <FontAwesome
                name="phone"
                size={css.iconSizeMin}
                color={css.colors.mainOpacity}
              />
            </View>
          }
          value={login}
          onChangeText={(text) => setLogin(text)}
          isTwoIcons
        />

        <ImageInput
          placeholder="Password"
          icon={
            <FontAwesome
              name="lock"
              size={css.iconSizeMax}
              color={css.colors.mainOpacity}
            />
          }
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry={true}
        />
      </View>

      <View style={styles.buttonContainer}>
        <ButtonGradient text="Log in" />
      </View>

      <SignUpButton />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: css.auth.gap,
  },
  iconsContainer: {
    flexDirection: 'row',
    gap: 5,
  },
  buttonContainer: {
    alignItems: 'center',
  },
});
