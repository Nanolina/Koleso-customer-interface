import { Fontisto } from '@expo/vector-icons';
import { Formik } from 'formik';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { StyleSheet, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { ROLE } from '../../../../../consts';
import { MessageBox } from '../../../../components/MessageBox';
import { colors, css, sizes } from '../../../../consts';
import { IRootState } from '../../../../redux/rootReducer';
import { AppDispatch } from '../../../../redux/store';
import { handleSignup } from '../../../../redux/thunks/user';
import { ISignupData } from '../../../../services/types/request';
import { Button } from '../../../../ui/Button';
import { Loader } from '../../../../ui/Loader';
import { ImageInput } from '../ImageInput';
import { initialValues } from './initialValues';
import { validationSchema } from './validationSchema';

export const SignUpPhoneEmailForm: React.FC = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch<AppDispatch>();

  const { loading, error } = useSelector((state: IRootState) => state.user);

  const onSubmit = async (values: ISignupData, { setSubmitting }) => {
    const { email, phone, password, repeatedPassword } = values;

    const userData: ISignupData = {
      email,
      phone,
      password,
      repeatedPassword,
      role: ROLE,
    };

    dispatch(handleSignup(userData));
    setSubmitting(false);
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <View style={styles.container}>
        <View style={css.auth.inputContainer}>
          <Formik
            initialValues={initialValues}
            validationSchema={() => validationSchema(t)}
            onSubmit={onSubmit}
          >
            {({
              values,
              errors,
              touched,
              setFieldValue,
              isValid,
              dirty,
              handleChange,
              handleBlur,
              handleSubmit,
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
                    onBlur={handleBlur('email')}
                    errors={errors}
                    touched={touched}
                  />

                  {/* <ImageInput
                  placeholder={t('auth.phone')}
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
                  placeholder={t('auth.username')}
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
                  placeholder={t('auth.password')}
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
                  placeholder={t('auth.repeatPassword')}
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
                /> */}
                  <View style={styles.buttonContainer}>
                    <Button
                      text={t('auth.signUp')}
                      onPress={handleSubmit}
                      disabled={!isValid || !dirty}
                    />
                  </View>

                  {error && <MessageBox errorMessage={error} />}
                </View>
              </>
            )}
          </Formik>
        </View>
      </View>
    </>
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
