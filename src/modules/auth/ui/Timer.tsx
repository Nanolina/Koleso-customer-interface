import React from 'react';
import { useTranslation } from 'react-i18next';
import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../../../consts';
import { Hr } from '../../../ui/Hr';
import { ITimerTextProps } from '../types';

export const TimerText: React.FC<ITimerTextProps> = React.memo(({ timer }) => {
  const { t } = useTranslation();

  return (
    <View style={styles.container}>
      <Hr />
      <Text style={styles.text}>
        {t('auth.timer.wait')} {timer} {t('auth.timer.seconds')}
      </Text>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    gap: 5,
  },
  text: {
    color: colors.darkGray,
  },
});
