import { FontAwesome, Fontisto } from '@expo/vector-icons';
import React, { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { StyleSheet, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../../redux/rootReducer';
import { setValueAuth } from '../../../../redux/slices/authSlice';
import { colors, css, sizes } from '../../../consts';
import { Button } from '../../../ui/Button';
import { ImageInput } from './ImageInput';

export const SignUpPhoneEmail: React.FC = () => {
  const { t } = useTranslation('translation', { keyPrefix: 'auth' });

  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');

  const { email, phone, name } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();

  const onChangeEmail = useCallback(
    (text) => dispatch(setValueAuth({ key: 'email', value: text })),
    [dispatch]
  );

  const onChangePhone = useCallback(
    (text) => dispatch(setValueAuth({ key: 'phone', value: text })),
    [dispatch]
  );

  const onChangeUsername = useCallback(
    (text) => dispatch(setValueAuth({ key: 'name', value: text })),
    [dispatch]
  );

  return (
    <View style={styles.container}>
      <View style={css.auth.inputContainer}>
        <ImageInput
          placeholder={t('email')}
          icon={
            <Fontisto
              name="email"
              size={sizes.iconSizeMiddle}
              color={colors.mainOpacity}
            />
          }
          value={email}
          onChangeText={onChangeEmail}
        />

        <ImageInput
          placeholder={t('phone')}
          icon={
            <FontAwesome
              name="phone"
              size={sizes.iconSizeMiddle}
              color={colors.mainOpacity}
            />
          }
          value={phone}
          onChangeText={onChangePhone}
          autoComplete="tel"
          inputMode="tel"
        />

        <ImageInput
          placeholder={t('username')}
          icon={
            <FontAwesome
              name="user-circle-o"
              size={sizes.iconSizeMiddle}
              color={colors.mainOpacity}
            />
          }
          value={name}
          onChangeText={onChangeUsername}
          autoComplete="name"
        />

        <ImageInput
          placeholder={t('password')}
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

        <ImageInput
          placeholder={t('repeatPassword')}
          icon={
            <FontAwesome
              name="lock"
              size={sizes.iconSizeMax}
              color={colors.mainOpacity}
            />
          }
          value={repeatPassword}
          onChangeText={(text) => setRepeatPassword(text)}
          secureTextEntry={true}
        />
      </View>

      <View style={styles.buttonContainer}>
        <Button text={t('signUp')} onPress={() => {}} />
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
