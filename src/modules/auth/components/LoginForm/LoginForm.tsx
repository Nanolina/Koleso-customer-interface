import { FontAwesome, Fontisto } from '@expo/vector-icons';
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native';
import { unwrapResult } from '@reduxjs/toolkit';
import { Formik } from 'formik';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { StyleSheet, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { MessageBox } from '../../../../components/MessageBox';
import { colors, css, sizes } from '../../../../consts';
import { IRootState } from '../../../../redux/rootReducer';
import { clearMessages } from '../../../../redux/slices/userSlice';
import { AppDispatch } from '../../../../redux/store';
import { handleLogin } from '../../../../redux/thunks/user';
import { ILoginData } from '../../../../services/types/request';
import { Button } from '../../../../ui/Button';
import { Loader } from '../../../../ui/Loader';
import { ImageInput } from '../ImageInput';
import { NotAccountSignUp } from './NotAccountSignUp';
import { initialValues } from './initialValues';

export const LoginForm: React.FC = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch<AppDispatch>();
  const navigation: NavigationProp<ParamListBase> = useNavigation();

  const { loading, error, success } = useSelector(
    (state: IRootState) => state.user
  );

  const onSubmit = async (values: ILoginData, { setSubmitting }) => {
    const { email, password } = values;

    const userData: ILoginData = {
      email,
      password,
    };

    const data = await dispatch(handleLogin(userData));
    setSubmitting(false);
    const user = unwrapResult(data);
    if (user) navigation.navigate('SettingsPage');
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <View style={styles.container}>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        {({
          values,
          errors,
          touched,
          isValid,
          dirty,
          handleChange,
          handleSubmit,
          setFieldTouched,
        }) => (
          <>
            <View style={css.auth.inputContainer}>
              <ImageInput
                name="email"
                placeholder={t('auth.email')}
                icon={
                  <Fontisto
                    name="email"
                    size={sizes.iconSizeMiddle}
                    color={colors.mainOpacity}
                  />
                }
                value={values.email}
                onChangeText={handleChange('email')}
                inputMode="email"
                autoComplete="email"
                errors={errors}
                touched={touched}
                onBlur={() => setFieldTouched('email', true)}
              />

              <ImageInput
                name="password"
                placeholder={t('auth.password')}
                icon={
                  <FontAwesome
                    name="lock"
                    size={sizes.iconSizeMax}
                    color={colors.mainOpacity}
                  />
                }
                value={values.password}
                onChangeText={handleChange('password')}
                secureTextEntry={true}
                errors={errors}
                touched={touched}
                onBlur={() => setFieldTouched('password', true)}
              />
            </View>

            <View style={styles.buttonsContainer}>
              <Button
                text={t('auth.login')}
                onPress={handleSubmit}
                disabled={!isValid || !dirty}
                width="45%"
              />
              <Button
                text={t(`${t('auth.forgotPassword')}?`)}
                backgroundColor={colors.white}
                textColor={colors.main}
                border={false}
                isBold={false}
                hasShadow
                width="45%"
                onPress={() =>
                  navigation.navigate('RequestPasswordRecoveryPage')
                }
              />
            </View>

            <NotAccountSignUp />

            {error && (
              <MessageBox
                errorMessage={error}
                clearMessage={() => dispatch(clearMessages())}
              />
            )}
            {success && (
              <MessageBox
                successMessage={success}
                clearMessage={() => dispatch(clearMessages())}
              />
            )}
          </>
        )}
      </Formik>
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
  buttonsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 30,
    gap: 20,
  },
});
