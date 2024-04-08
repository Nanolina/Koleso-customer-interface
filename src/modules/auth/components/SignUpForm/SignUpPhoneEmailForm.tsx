import { FontAwesome, Fontisto } from '@expo/vector-icons';
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native';
import { Formik } from 'formik';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { StyleSheet, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { ROLE } from '../../../../../consts';
import { MessageBox } from '../../../../components/MessageBox';
import { Phone } from '../../../../components/Phone';
import { colors, css, sizes } from '../../../../consts';
import { IRootState } from '../../../../redux/rootReducer';
import { clearMessages } from '../../../../redux/slices/userSlice';
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
  const navigation: NavigationProp<ParamListBase> = useNavigation();
  const dispatch = useDispatch<AppDispatch>();

  const { loading, error, success } = useSelector(
    (state: IRootState) => state.user
  );

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
    navigation.navigate('EmailVerificationPage');
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <View style={styles.container}>
        <Formik
          initialValues={initialValues}
          validationSchema={() => validationSchema(t)}
          onSubmit={onSubmit}
        >
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
                <Phone
                  phone={values.phone}
                  handleChange={handleChange}
                  errorsPhone={errors.phone}
                />

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

                <ImageInput
                  name="repeatedPassword"
                  placeholder={t('auth.repeatedPassword')}
                  icon={
                    <FontAwesome
                      name="lock"
                      size={sizes.iconSizeMax}
                      color={colors.mainOpacity}
                    />
                  }
                  value={values.repeatedPassword}
                  onChangeText={handleChange('repeatedPassword')}
                  secureTextEntry={true}
                  errors={errors}
                  touched={touched}
                  onBlur={() => setFieldTouched('repeatedPassword', true)}
                />

                <View style={styles.buttonContainer}>
                  <Button
                    text={t('auth.signUp')}
                    onPress={handleSubmit}
                    disabled={!isValid || !dirty}
                  />
                </View>

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
              </View>
            </>
          )}
        </Formik>
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
