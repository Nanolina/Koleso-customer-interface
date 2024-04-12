import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native';
import { unwrapResult } from '@reduxjs/toolkit';
import { Formik } from 'formik';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { StyleSheet, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { LabelWithInput } from '../../../components/LabelWithInput';
import { MessageBox } from '../../../components/MessageBox';
import { css } from '../../../consts';
import { IRootState } from '../../../redux/rootReducer';
import { clearMessages } from '../../../redux/slices/userSlice';
import { AppDispatch } from '../../../redux/store';
import {
  handleResendConfirmationCode,
  handleVerifyConfirmationCode,
} from '../../../redux/thunks/user';
import { IVerifyConfirmationCodeData } from '../../../services/types/request';
import { ConfirmationCodeType } from '../../../types';
import { Button } from '../../../ui/Button';
import { Loader } from '../../../ui/Loader';
import { TimerText } from '../ui/Timer';

export const EmailVerificationForm: React.FC = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch<AppDispatch>();
  const navigation: NavigationProp<ParamListBase> = useNavigation();

  const [timer, setTimer] = useState(120); // Start timer immediately upon loading
  const [isButtonResendDisabled, setIsButtonResendDisabled] = useState(true);

  const { id, loading, error, success, email } = useSelector(
    (state: IRootState) => state.user
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prevTimer) => {
        const newTime = prevTimer - 1;
        if (newTime <= 0) {
          clearInterval(interval);
          setIsButtonResendDisabled(false);
          return 0;
        }
        return newTime;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const onSubmit = async (values: any) => {
    const codeData: IVerifyConfirmationCodeData = {
      code: parseInt(values.code),
      codeType: ConfirmationCodeType.EMAIL_CONFIRMATION,
    };

    let data;
    data = await dispatch(handleVerifyConfirmationCode(codeData));
    const { isVerifiedEmail } = unwrapResult(data);
    if (isVerifiedEmail) navigation.navigate('SettingsPage');
  };

  const resendCode = async () => {
    setIsButtonResendDisabled(true);
    setTimer(120); // Reset timer
    dispatch(
      handleResendConfirmationCode(ConfirmationCodeType.EMAIL_CONFIRMATION)
    );
  };

  if (loading) return <Loader />;

  return (
    <View style={styles.container}>
      <Formik initialValues={{ code: '' }} onSubmit={onSubmit}>
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
            <LabelWithInput
              name="code"
              placeholder={t('auth.code.email.placeholder')}
              label={t('auth.code.email.confirm')}
              extra={t('auth.code.email.sent', { email })}
              maxLength={6}
              value={values.code}
              inputMode="numeric"
              onChangeText={handleChange('code')}
              errors={errors}
              touched={touched}
              onBlur={() => setFieldTouched('code', true)}
            />

            <View style={styles.buttonsContainer}>
              <Button
                onPress={handleSubmit}
                text={t('send')}
                disabled={!isValid || !dirty}
              />
              <Button
                onPress={resendCode}
                text={t('auth.code.email.resend', { email })}
                disabled={isButtonResendDisabled}
              />
              {timer && <TimerText timer={timer}></TimerText>}
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
  buttonsContainer: {
    alignItems: 'center',
    paddingBottom: 30,
    gap: 20,
  },
});
