import { StyleSheet, View } from 'react-native';
import { notifications } from '../../../../mockData';
import { INotificationProps } from '../types';
import { Notification } from './Notification';

export const Notifications: React.FC = () => {
  return (
    <View style={styles.container}>
      {notifications.map((notification: INotificationProps) => (
        <Notification notification={notification} key={notification.id} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 10,
  },
});
