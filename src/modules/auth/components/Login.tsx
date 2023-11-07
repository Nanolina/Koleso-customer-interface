import { FontAwesome, Fontisto } from '@expo/vector-icons';
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { colors, css, sizes } from '../../../consts';
import { Button } from '../../../ui/Button';
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
                size={sizes.iconSizeMin}
                color={colors.mainOpacity}
              />
              <FontAwesome
                name="phone"
                size={sizes.iconSizeMin}
                color={colors.mainOpacity}
              />
            </View>
          }
          value={login}
          onChangeText={(text) => setLogin(text)}
        />

        <ImageInput
          placeholder="Password"
          icon={
            <FontAwesome
              name="lock"
              size={sizes.iconSizeMax}
              color={colors.mainOpacity}
            />
          }
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry={true}
        />
      </View>

      <View style={styles.buttonContainer}>
        <Button text="Log in" onPress={() => {}} />
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
