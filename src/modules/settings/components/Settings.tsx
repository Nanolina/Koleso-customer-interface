import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native';
import React, { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';
import { MessageBox } from '../../../components/MessageBox';
import { colors, sizes } from '../../../consts';
import { IRootState } from '../../../redux/rootReducer';
import { ISettingsState } from '../../../redux/slices/settingsSlice';
import { clearMessages } from '../../../redux/slices/userSlice';
import { AppDispatch } from '../../../redux/store';
import { handleLogout } from '../../../redux/thunks/user';
import { CodeType } from '../../../types';
import { Loader } from '../../../ui/Loader';
import { useEmailCode } from '../../auth';
import { data } from '../data';
import { Row } from './Row';

export const Settings: React.FC = () => {
  const navigation: NavigationProp<ParamListBase> = useNavigation();
  const { i18n } = useTranslation();
  const { t } = useTranslation();
  const dispatch = useDispatch<AppDispatch>();

  const { loading, error, success, phone, email, isVerifiedEmail } =
    useSelector((state: IRootState) => state.user);

  const { name, gender, birthday } = useSelector(
    (state: IRootState) => state.settings as ISettingsState
  );

  const { resendCode } = useEmailCode(CodeType.EMAIL_CONFIRMATION);

  const handleSignOutPress = useCallback(() => {
    dispatch(handleLogout());
    navigation.navigate('LoginPage');
  }, [navigation]);

  if (loading) return <Loader />;

  return (
    <View style={styles.container}>
      <Row
        title="Name"
        displayTitle={t('settings.name')}
        selectedItem={name}
        navigateTo="SettingsInputPage"
      />
      <Row
        title="Gender"
        displayTitle={t('settings.gender')}
        items={data.genders}
        selectedItem={gender}
        navigateTo="SettingsCheckboxPage"
      />
      <Row
        title="Phone"
        displayTitle={t('settings.phone')}
        selectedItem={phone}
        navigateTo="SettingsInputPage"
      />
      <Row
        title="Email"
        displayTitle={t('settings.email')}
        selectedItem={email}
        navigateTo={isVerifiedEmail ? 'SettingsInputPage' : 'EmailCodePage'}
        onPress={isVerifiedEmail ? () => {} : resendCode}
      />
      <Row
        title="Date of birth"
        displayTitle={t('settings.dateOfBirth')}
        selectedItem={birthday}
        navigateTo="SettingsBirthdayPage"
      />
      <Row
        title="Password"
        displayTitle={t('settings.password')}
        navigateTo="SettingsPasswordPage"
      />
      <Row
        title="Language"
        displayTitle={t('settings.language')}
        items={data.languages}
        selectedItem={i18n.language}
        navigateTo="SettingsCheckboxPage"
      />

      <View style={styles.buttonsContainer}>
        <TouchableOpacity onPress={handleSignOutPress}>
          <Text style={styles.signOut}>{t('settings.signOutOfAccount')}</Text>
        </TouchableOpacity>
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
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 30,
  },
  buttonsContainer: {
    alignItems: 'center',
    paddingTop: 60,
    gap: 20,
  },
  signOut: {
    color: colors.red,
    fontSize: sizes.text18,
  },
  delete: {
    color: colors.gray,
    fontSize: sizes.text18,
  },
});
