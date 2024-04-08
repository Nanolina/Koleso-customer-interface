import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native';
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
import { handleVerifyConfirmationCode } from '../../../redux/thunks/user';
import { IVerifyConfirmationCodeData } from '../../../services/types/request';
import { ConfirmationCodeType } from '../../../types';
import { Button } from '../../../ui/Button';
import { Loader } from '../../../ui/Loader';
import { TimerText } from '../ui/Timer';

export const EmailVerificationForm: React.FC = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch<AppDispatch>();
  const navigation: NavigationProp<ParamListBase> = useNavigation();

  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [timer, setTimer] = useState(0);

  const { id, loading, error, success, email } = useSelector(
    (state: IRootState) => state.user
  );

  useEffect(() => {
    let interval: number | undefined;

    if (isButtonDisabled) {
      interval = window.setInterval(() => {
        setTimer((oldTimer) => {
          if (oldTimer > 0) return oldTimer - 1;
          clearInterval(interval);
          return 0;
        });
      }, 1000);
    }

    return () => {
      if (interval !== undefined) clearInterval(interval);
    };
  }, [isButtonDisabled]);

  const onSubmit = async (values: any) => {
    setIsButtonDisabled(true);
    setTimer(120); // 2 min = 120 sec

    const codeData: IVerifyConfirmationCodeData = {
      code: parseInt(values.code),
      codeType: ConfirmationCodeType.EMAIL_CONFIRMATION,
    };

    dispatch(handleVerifyConfirmationCode(codeData));
    navigation.navigate('SettingsPage');

    // ADD BUTTON TO RESEND CONFIRMATION AGAIN
    setTimeout(() => setIsButtonDisabled(false), 120000); // 120000 milliseconds = 2 min
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

            <View style={styles.buttonContainer}>
              <Button
                text={t('send')}
                onPress={handleSubmit}
                disabled={!isValid || !dirty}
              />
              {isButtonDisabled && <TimerText timer={timer} />}
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
  buttonContainer: {
    alignItems: 'center',
    paddingBottom: 30,
  },
});
