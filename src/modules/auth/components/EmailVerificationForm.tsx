import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native';
import { unwrapResult } from '@reduxjs/toolkit';
import { Formik } from 'formik';
import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Image, StyleSheet, Text, View } from 'react-native';
import { CodeField, Cursor } from 'react-native-confirmation-code-field';
import { useDispatch, useSelector } from 'react-redux';
import { MessageBox } from '../../../components/MessageBox';
import { colors, css, sizes } from '../../../consts';
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
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const { loading, error, success, email } = useSelector(
    (state: IRootState) => state.user
  );

  const [timer, setTimer] = useState(30);
  const [isButtonResendDisabled, setIsButtonResendDisabled] = useState(true);

  // Timer
  useEffect(() => {
    if (timer === 0) {
      setIsButtonResendDisabled(false);
      clearInterval(intervalRef.current as NodeJS.Timeout);
    } else {
      setIsButtonResendDisabled(true);
    }
  }, [timer]);

  useEffect(() => {
    startTimer();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  const startTimer = () => {
    setTimer(30);
    intervalRef.current = setInterval(() => {
      setTimer((prevTimer) => prevTimer - 1);
    }, 1000);
  };

  const resendCode = () => {
    dispatch(
      handleResendConfirmationCode(ConfirmationCodeType.EMAIL_CONFIRMATION)
    );
    if (intervalRef.current) clearInterval(intervalRef.current);
    startTimer(); // Resetting the timer to 30 seconds
  };

  const onSubmit = async (values: any) => {
    const codeData: IVerifyConfirmationCodeData = {
      code: parseInt(values.code.join('')),
      codeType: ConfirmationCodeType.EMAIL_CONFIRMATION,
    };

    let data;
    data = await dispatch(handleVerifyConfirmationCode(codeData));
    const { isVerifiedEmail } = unwrapResult(data);
    if (isVerifiedEmail) navigation.navigate('SettingsPage');
  };

  if (loading) return <Loader />;

  return (
    <View style={styles.container}>
      <Image
        source={require('../../../assets/email.png')}
        style={styles.image}
      />
      <Formik initialValues={{ code: Array(6).fill('') }} onSubmit={onSubmit}>
        {({ values, setFieldValue, handleSubmit }) => (
          <>
            <View style={styles.textContainer}>
              <Text style={styles.text}>{t('auth.code.email.sent')}</Text>
              <Text style={styles.email}>{email}</Text>
              <Text style={styles.text}>{t('auth.code.email.copy')}</Text>
            </View>
            <View style={styles.codeTimerContainer}>
              <CodeField
                value={values.code.join('')}
                onChangeText={(text) => {
                  // Update the value of the code field
                  setFieldValue('code', text.split(''));

                  // Check if all cells are filled in
                  if (text.length === 6) {
                    handleSubmit(); // If filled in, submit the form
                  }
                }}
                rootStyle={styles.codeContainer}
                cellCount={6}
                keyboardType="number-pad"
                textContentType="oneTimeCode"
                renderCell={({ index, symbol, isFocused }) => (
                  <Text
                    key={index}
                    style={[styles.cell, isFocused && styles.focusCell]}
                  >
                    {symbol || (isFocused ? <Cursor /> : null)}
                  </Text>
                )}
              />
              {timer > 0 && <TimerText timer={timer} />}
            </View>

            {!timer && (
              <Button
                onPress={resendCode}
                text={t('auth.code.email.resend', { email })}
                disabled={isButtonResendDisabled}
                isLink
              />
            )}
          </>
        )}
      </Formik>
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
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 40,
    display: 'flex',
    alignItems: 'center',
  },
  codeTimerContainer: {
    gap: 10,
  },
  image: {
    width: 150,
    height: 150,
  },
  codeContainer: {
    gap: 10,
  },
  textContainer: {
    gap: 2,
    alignItems: 'center',
  },
  text: {
    fontSize: sizes.text15,
    textAlign: 'center',
  },
  email: {
    fontWeight: 'bold',
  },
  cell: {
    width: 40,
    height: 40,
    lineHeight: 34,
    fontSize: sizes.text20,
    fontWeight: 'bold',
    color: colors.main,
    borderWidth: 2,
    borderRadius: css.borderRadiusMax,
    borderColor: colors.lightGray,
    textAlign: 'center',
  },
  focusCell: {
    borderColor: colors.main,
    borderRadius: css.borderRadiusMax,
  },
});
