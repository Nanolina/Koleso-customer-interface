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
import { RootState } from '../../../../redux/rootReducer';
import { ISettingsState } from '../../../../redux/slices/settingsSlice';
import { Row } from '../../../components/Row';
import { colors, sizes } from '../../../consts';
import { data } from '../data';

export const Settings: React.FC = () => {
  const navigation: NavigationProp<ParamListBase> = useNavigation();
   const { t, i18n } = useTranslation();

  const { name, gender, phone, email, birthday } = useSelector(
    (state: RootState) => state.settings as ISettingsState
  );


  const handleSignOutPress = useCallback(() => {
    navigation.navigate('SignUpPage');
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Row title="Name" selectedItem={name} navigateTo="SettingsInputPage" />
      <Row
        items={data.genders}
        title="Gender"
        selectedItem={gender}
        navigateTo="SettingsCheckboxPage"
      />
      <Row title="Phone" selectedItem={phone} navigateTo="SettingsInputPage" />
      <Row title="Email" selectedItem={email} navigateTo="SettingsInputPage" />
      <Row
        title="Date of birth"
        selectedItem={birthday}
        navigateTo="SettingsBirthdayPage"
      />
      <Row title="Password" navigateTo="SettingsPasswordPage" />
      <Row
        items={data.languages}
        title={t('settings.language')}
        selectedItem={i18n.language}
        navigateTo="SettingsCheckboxPage"
      />

      <View style={styles.buttonsContainer}>
        <TouchableOpacity onPress={handleSignOutPress}>
          <Text style={styles.signOut}>Sign out of account</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.delete}>Delete account</Text>
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
