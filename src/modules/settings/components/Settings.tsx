import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native';
import React, { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useSelector } from 'react-redux';
import { Row } from '../../../components/Row';
import { colors, sizes } from '../../../consts';
import { IRootState } from '../../../redux/rootReducer';
import { ISettingsState } from '../../../redux/slices/settingsSlice';
import { data } from '../data';

export const Settings: React.FC = () => {
  const navigation: NavigationProp<ParamListBase> = useNavigation();
  const { i18n } = useTranslation();
  const { t } = useTranslation();

  const { name, gender, phone, email, birthday } = useSelector(
    (state: IRootState) => state.settings as ISettingsState
  );

  const handleSignOutPress = useCallback(() => {
    navigation.navigate('SignUpPage');
  }, [navigation]);

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
        navigateTo="SettingsInputPage"
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
        <TouchableOpacity>
          <Text style={styles.delete}>{t('settings.deleteAccount')}</Text>
        </TouchableOpacity>
      </View>
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
