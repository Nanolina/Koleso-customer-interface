import { Fontisto } from '@expo/vector-icons';
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
import { MessageBox } from '../../../../../../components/MessageBox';
import { colors, css, sizes } from '../../../../../../consts';
import { IRootState } from '../../../../../../redux/rootReducer';
import { clearMessages } from '../../../../../../redux/slices/userSlice';
import { AppDispatch } from '../../../../../../redux/store';
import { handleRequestPasswordRecovery } from '../../../../../../redux/thunks/user';
import { IChangeEmailData } from '../../../../../../services/types/request';
import { Button } from '../../../../../../ui/Button';
import { Loader } from '../../../../../../ui/Loader';
import { TimerText } from '../../../../ui/Timer';
import { ImageInput } from '../../../ImageInput';
import { initialValues } from './initialValues';

export const RequestPasswordRecoveryForm: React.FC = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch<AppDispatch>();
  const navigation: NavigationProp<ParamListBase> = useNavigation();

  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [timer, setTimer] = useState(0);

  const { id, loading, error, success } = useSelector(
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

  const onSubmit = async (values: IChangeEmailData) => {
    setIsButtonDisabled(true);
    setTimer(120); // 2 min = 120 sec

    const userData: IChangeEmailData = {
      email: values.email,
    };

    dispatch(handleRequestPasswordRecovery(userData));

    setTimeout(() => setIsButtonDisabled(false), 120000); // 120000 milliseconds = 2 min
  };

  if (loading) return <Loader />;

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
