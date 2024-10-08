import { Formik } from 'formik';
import { useTranslation } from 'react-i18next';
import { Image, StyleSheet, Text, View } from 'react-native';
import { CodeField, Cursor } from 'react-native-confirmation-code-field';
import { useDispatch, useSelector } from 'react-redux';
import { MessageBox } from '../../../components/MessageBox';
import { colors, css, sizes } from '../../../consts';
import { IRootState } from '../../../redux/rootReducer';
import { clearMessages } from '../../../redux/slices/userSlice';
import { AppDispatch } from '../../../redux/store';
import { CodeType } from '../../../types';
import { Button } from '../../../ui/Button';
import { Loader } from '../../../ui/Loader';
import { useEmailCode } from '../hooks/useEmailCode';
import { TimerText } from '../ui/Timer';

export const EmailCodeForm: React.FC<{
  codeType: CodeType | undefined;
}> = ({ codeType = CodeType.EMAIL_CONFIRMATION }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch<AppDispatch>();

  const { loading, error, success, email } = useSelector(
    (state: IRootState) => state.user
  );

  const { timer, isButtonResendDisabled, resendCode, onSubmitCode } =
    useEmailCode(codeType);

  if (loading) return <Loader />;

  return (
    <View style={styles.container}>
      <Image
        source={require('../../../assets/email.png')}
        style={styles.image}
      />
      <Formik
        initialValues={{ code: Array(6).fill('') }}
        onSubmit={onSubmitCode}
      >
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
              {timer > 0 ? (
                <TimerText timer={timer} />
              ) : (
                <Button
                  onPress={resendCode}
                  text={t('auth.code.email.resend', { email })}
                  disabled={isButtonResendDisabled}
                  isLink
                />
              )}

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
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 40,
    display: 'flex',
    alignItems: 'center',
  },
  codeTimerContainer: {
    gap: 30,
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
