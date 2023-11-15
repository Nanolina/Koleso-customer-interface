import { View } from 'react-native';
import { notifications } from '../../../../mockData';
import { css } from '../../../consts';
import { INotificationProps } from '../types';
import { Notification } from './Notification';

export const Notifications: React.FC = () => {
  return (
    <View style={css.shadowContainer}>
      {notifications.map((notification: INotificationProps) => (
        <Notification notification={notification} key={notification.id} />
      ))}
    </View>
  );
};
