import { StyleSheet, View } from 'react-native';
import { Notification } from './Notification';
import { notifications } from '../../../../mockData';

export const Notifications = () => {
  return (
    <View style={styles.container}>
      {notifications.map((notification) => (
        <Notification notification={notification} key={notification.id} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 20,
  },
});
