import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useSelector } from 'react-redux';
import { css } from '../../../consts';
import { data } from '../data';
import { Row } from './Row';

export const Settings: React.FC = () => {
  const { name, gender, phone, email, birthday } = useSelector(
    (state: any) => state.settings
  );

  const navigation: any = useNavigation();

  return (
    <View style={styles.container}>
      <Row type="input" title="Name" selectedItem={name} />
      <Row
        type="checkbox"
        items={data.genders}
        title="Gender"
        selectedItem={gender}
      />
      <Row type="input" title="Phone" selectedItem={phone} />
      <Row type="input" title="Email" selectedItem={email} />
      <Row type="birthday" title="Date of birth" selectedItem={birthday} />
      <Row type="password" title="Password" />

      <View style={styles.buttonsContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('SignUpPage')}>
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
    color: css.colors.red,
    fontSize: css.size.text18,
  },
  delete: {
    color: css.colors.gray,
    fontSize: css.size.text18,
  },
});
