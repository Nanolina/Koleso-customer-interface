import React from 'react';
import { useTranslation } from 'react-i18next';
import { TextInput } from 'react-native';
import { ITimerTextProps } from '../types';

export const TimerText: React.FC<ITimerTextProps> = React.memo(({ timer }) => {
  const { t } = useTranslation();

  return (
    <TextInput>
      {t('auth.timer.wait')} {timer} {t('auth.timer.seconds')}
    </TextInput>
  );
});
