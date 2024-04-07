import { FontAwesome, Fontisto } from '@expo/vector-icons';
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
import { SignUpButton } from '../../ui/SignUpButton';
import { ImageInput } from '../ImageInput';
import { initialValues } from './initialValues';

export const LoginForm: React.FC = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch<AppDispatch>();

  const { loading, error, success } = useSelector(
    (state: IRootState) => state.user
  );

  const onSubmit = async (values: ILoginData, { setSubmitting }) => {
    const { email, password } = values;

    const userData: ILoginData = {
      email,
      password,
    };

    dispatch(handleLogin(userData));
    setSubmitting(false);
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

            <View style={styles.buttonContainer}>
              <Button
                text={t('auth.logIn')}
                onPress={handleSubmit}
                disabled={!isValid || !dirty}
              />
            </View>

            <SignUpButton />

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
  buttonContainer: {
    alignItems: 'center',
    paddingBottom: 30,
  },
});
