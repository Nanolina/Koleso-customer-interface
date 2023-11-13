import React, { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { View } from 'react-native';
import { CheckboxItem } from '../../../ui/CheckboxItem';
import { data } from '../data';

export const CheckboxListLanguage: React.FC = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = useCallback(
    (language: string) => {
      i18n.changeLanguage(language);
    },
    [i18n]
  );

  const renderItem = useCallback(
    (item: string) => (
      <CheckboxItem
        key={item}
        text={t(item)}
        isSelected={i18n.language === item}
        onToggle={() => changeLanguage(item)}
      />
    ),
    [changeLanguage, t, i18n.language]
  );

  return <View>{data.languages.map(renderItem)}</View>;
};
