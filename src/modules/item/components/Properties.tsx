import React from 'react';
import { useTranslation } from 'react-i18next';
import { View } from 'react-native';
import { Property } from '../../../ui/Property';
import { IPropertiesProps } from '../types';

export const Properties: React.FC<IPropertiesProps> = React.memo(
  ({ color, composition, gender }) => {
    const { t } = useTranslation();

    return (
      <View>
        {color && (
          <Property
            label={t('filter.Color.label')}
            text={t(`filter.Color.${color}`)}
          />
        )}
        {composition && (
          <Property
            label={t('filter.Composition.label')}
            text={t(`filter.Composition.${composition}`)}
          />
        )}
        {gender && (
          <Property
            label={t('filter.Gender.label')}
            text={t(`filter.Gender.${gender}`)}
          />
        )}
        <Property label={t('filter.Size')} />
      </View>
    );
  }
);
