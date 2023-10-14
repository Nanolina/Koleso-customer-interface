import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useSelector } from 'react-redux';
import { css } from '../../../consts';
import { data } from '../data';
import { Row } from './Row';

export const Settings: React.FC = () => {
  const { name, gender, phone, email } = useSelector(
    (state: any) => state.settings
  );

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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: css.padding,
    paddingVertical: css.padding,
    gap: 20,
  },
});
