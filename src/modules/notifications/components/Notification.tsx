import { StyleSheet, Text, View } from 'react-native';
import { css } from '../../../consts';

export const Notification = ({ notification }) => {
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
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: css.colors.lightPink,
    padding: 10,
    borderRadius: css.borderRadiusMax,
  },
  topContainer: {
    paddingBottom: 10,
  },
  title: {
    color: css.colors.green,
    fontSize: css.size.text16,
    fontWeight: 'bold',
  },
  date: {
    color: css.colors.gray,
  },
  text: {
    fontSize: css.size.text16,
  },
});
