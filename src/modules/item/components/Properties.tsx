import React from 'react';
import { useTranslation } from 'react-i18next';
import { View } from 'react-native';
import { IPropertiesProps } from '../types';
import { Property } from '../ui/Property';

export const Properties: React.FC<IPropertiesProps> = React.memo(
  ({ color, composition, gender }) => {
    const { t } = useTranslation('translation', { keyPrefix: 'filter' });

    return (
      <View>
        {color && (
          <Property label={t('Color.label')} text={t(`Color.${color}`)} />
        )}
        {composition && (
          <Property
            label={t('Composition.label')}
            text={t(`Composition.${composition}`)}
          />
        )}
        {gender && (
          <Property label={t('Gender.label')} text={t(`Gender.${gender}`)} />
        )}
        <Property label={t('Size')} />
      </View>
    );
  }
);
