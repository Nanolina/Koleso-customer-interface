import React from 'react';
import { useTranslation } from 'react-i18next';
import { StyleSheet, Text } from 'react-native';
import { colors } from '../../../consts';
import { IItemProps } from '../../../types';

export const DateText: React.FC<{ item: IItemProps }> = React.memo(
  ({ item }) => {
    const { t } = useTranslation('translation', { keyPrefix: 'purchases' });

    return (
      <>
        {item.delivery && (
          <Text style={styles.delivered}>
            {t('delivered')}: {item.delivery?.date}
          </Text>
        )}
        {item?.return?.date && (
          <Text style={styles.returned}>
            {t('returned')}: {item?.return?.date}
          </Text>
        )}
      </>
    );
  }
);

const styles = StyleSheet.create({
  delivered: {
    color: colors.green,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  returned: {
    color: colors.darkRed,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
