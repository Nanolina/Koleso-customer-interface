import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { TextWithInput } from '../../../components/TextWithInput';
import { css } from '../../../consts';
import { Button } from '../../../ui/Button';

export const ChangePassword = () => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');

  return (
    <View style={styles.container}>
      <TextWithInput
        text="Current password"
        value={currentPassword}
        onChangeText={setCurrentPassword}
        secureTextEntry={true}
      />
      <TextWithInput
        text="New password"
        value={newPassword}
        onChangeText={setNewPassword}
        secureTextEntry={true}
      />
      <View style={styles.buttonContainer}>
        <Button
          text="Change password"
          onPress={() => {}}
          backgroundColor={css.colors.orange}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 20,
  },
  buttonContainer: {
    alignItems: 'flex-end',
    paddingTop: 10,
  },
});
