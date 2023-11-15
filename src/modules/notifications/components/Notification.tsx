import React from 'react';
import { useTranslation } from 'react-i18next';
import { StyleSheet, Text, View } from 'react-native';
import { colors, css, sizes } from '../../../consts';
import { INotificationProps } from '../types';

export const Notification: React.FC<{ notification: INotificationProps }> =
  React.memo(({ notification }) => {
    const { t } = useTranslation('translation', { keyPrefix: 'notifications' });

    return (
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <Text style={styles.title}>
            {notification.status === 'sent' && t('sent')}
          </Text>
          <Text style={styles.date}>
            {notification.date} {notification.time}
          </Text>
        </View>
        <Text style={styles.text}>
          {t('textSent', {
            amount: notification.amount,
            transactionNumber: notification.transactionNumber,
          })}
        </Text>
      </View>
    );
  });

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderRadius: css.borderRadiusMax,
    ...css.shadow,
  },
  topContainer: {
    paddingBottom: 10,
  },
  title: {
    color: colors.green,
    fontSize: sizes.text16,
    fontWeight: 'bold',
  },
  date: {
    color: colors.gray,
  },
  text: {
    fontSize: sizes.text16,
  },
});
