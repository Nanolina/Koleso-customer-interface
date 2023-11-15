import React from 'react';
import { useTranslation } from 'react-i18next';
import { StyleSheet, View } from 'react-native';
import { IInfoItemProps } from '../types';
import { Property } from '../ui/Property';

export const InfoItem: React.FC<IInfoItemProps> = React.memo(
  ({ item, hasPadding = false }) => {
    const { t } = useTranslation('translation', { keyPrefix: 'filter' });

    return (
      <View
        style={
          hasPadding ? [styles.container, { paddingLeft: 5 }] : styles.container
        }
      >
        {item.color && (
          <Property label={t('Color.label')} text={t(`Color.${item.color}`)} />
        )}
        {item.selectedSize && (
          <Property label={t('Size')} text={item.selectedSize} />
        )}
      </View>
    );
  }
);

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
});
