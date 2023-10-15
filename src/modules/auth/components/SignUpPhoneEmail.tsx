import { FontAwesome, Fontisto } from '@expo/vector-icons';
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { setValueAuth } from '../../../../redux/slices/authSlice';
import { css } from '../../../consts';
import { ButtonGradient } from '../../../ui/ButtonGradient';
import { ImageInput } from './ImageInput';

export const SignUpPhoneEmail: React.FC = () => {
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');

  const { email, phone, name } = useSelector((state: any) => state.auth);
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <View style={css.auth.inputContainer}>
        <ImageInput
          placeholder="Email"
          icon={
            <Fontisto
              name="email"
              size={css.iconSizeMiddle}
              color={css.colors.mainOpacity}
            />
          }
          value={email}
          onChangeText={(text) =>
            dispatch(setValueAuth({ key: 'email', value: text }))
          }
        />

        <ImageInput
          placeholder="Phone"
          icon={
            <FontAwesome
              name="phone"
              size={css.iconSizeMiddle}
              color={css.colors.mainOpacity}
            />
          }
          value={phone}
          onChangeText={(text) =>
            dispatch(setValueAuth({ key: 'phone', value: text }))
          }
          autoComplete="tel"
          inputMode="tel"
        />

        <ImageInput
          placeholder="Username"
          icon={
            <FontAwesome
              name="user-circle-o"
              size={css.iconSizeMiddle}
              color={css.colors.mainOpacity}
            />
          }
          value={name}
          onChangeText={(text) =>
            dispatch(setValueAuth({ key: 'name', value: text }))
          }
          autoComplete="name"
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

        <ImageInput
          placeholder="Repeat password"
          icon={
            <FontAwesome
              name="lock"
              size={css.iconSizeMax}
              color={css.colors.mainOpacity}
            />
          }
          value={repeatPassword}
          onChangeText={(text) => setRepeatPassword(text)}
          secureTextEntry={true}
        />
      </View>

      <View style={styles.buttonContainer}>
        <ButtonGradient text="Sign up" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: css.auth.gap,
  },
  buttonContainer: {
    alignItems: 'center',
  },
});
