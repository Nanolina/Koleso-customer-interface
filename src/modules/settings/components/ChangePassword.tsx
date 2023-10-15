import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { TextWithInput } from '../../../components/TextWithInput';
import { ButtonGradient } from '../../../ui/ButtonGradient';

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
        <ButtonGradient
          text="Change password"
          onPress={() => {}}
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
  },
});
