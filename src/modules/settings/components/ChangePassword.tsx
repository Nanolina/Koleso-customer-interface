import React, { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { StyleSheet, View } from 'react-native';
import { TextWithInput } from '../../../components/TextWithInput';
import { colors } from '../../../consts';
import { Button } from '../../../ui/Button';

export const ChangePassword: React.FC = () => {
  const { t } = useTranslation();

  const [currentPassword, setCurrentPassword] = useState<string>('');
  const [newPassword, setNewPassword] = useState<string>('');

  const handleChangePassword = useCallback(() => {}, [
    currentPassword,
    newPassword,
  ]);

  return (
    <View style={styles.container}>
      <TextWithInput
        text={t('settings.currentPassword')}
        value={currentPassword}
        onChangeText={setCurrentPassword}
        secureTextEntry={true}
      />
      <TextWithInput
        text={t('settings.newPassword')}
        value={newPassword}
        onChangeText={setNewPassword}
        secureTextEntry={true}
      />
      <View style={styles.buttonContainer}>
        <Button
          text={t('settings.changePassword')}
          onPress={handleChangePassword}
          backgroundColor={colors.orange}
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
