import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { INotificationProps } from '../../../../mockData';
import { colors, css, sizes } from '../../../consts';

export const Notification: React.FC<{ notification: INotificationProps }> =
  React.memo(({ notification }) => {
    return (
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <Text style={styles.title}>{notification.title}</Text>
          <Text style={styles.date}>
            {notification.date} {notification.time}
          </Text>
        </View>
        <Text style={styles.text}>{notification.text}</Text>
      </View>
    );
  });

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.pink,
    padding: 10,
    borderRadius: css.borderRadiusMax,
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
