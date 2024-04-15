import { Fontisto } from '@expo/vector-icons';
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native';
import { unwrapResult } from '@reduxjs/toolkit';
import { Formik } from 'formik';
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
import { CodeType } from '../../../../../../types';
import { Button } from '../../../../../../ui/Button';
import { Loader } from '../../../../../../ui/Loader';
import { ImageInput } from '../../../ImageInput';
import { initialValues } from './initialValues';

export const RequestPasswordRecoveryForm: React.FC = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch<AppDispatch>();
  const navigation: NavigationProp<ParamListBase> = useNavigation();

  const { loading, error, success } = useSelector(
    (state: IRootState) => state.user
  );

  const onSubmit = async (values: IChangeEmailData) => {
    const userData: IChangeEmailData = {
      email: values.email,
    };

    let data;
    data = await dispatch(handleRequestPasswordRecovery(userData));
    const { email } = unwrapResult(data);
    if (email) {
      navigation.navigate('EmailCodePage', {
        codeType: CodeType.PASSWORD_RESET,
      });
    }
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
              autoComplete="email"
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
