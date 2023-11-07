import { StyleSheet, Text, View } from 'react-native';
import { sizes } from '../../../consts';
import { WorkingDay } from './WorkingDay';

export const OpeningHours = ({ days }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Opening hours:</Text>
      <View style={styles.daysContainer}>
        <WorkingDay text="Monday" hours={days.monday} />
        <WorkingDay text="Tuesday" hours={days.tuesday} />
        <WorkingDay text="Wednesday" hours={days.wednesday} />
        <WorkingDay text="Thursday" hours={days.thursday} />
        <WorkingDay text="Friday" hours={days.friday} />
        <WorkingDay text="Saturday" hours={days.saturday} />
        <WorkingDay text="Sunday" hours={days.sunday} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 10,
  },
  daysContainer: {
    gap: 10,
    width: '70%',
  },
  label: {
    fontWeight: 'bold',
    fontSize: sizes.text16,
  },
  rowDay: {
    flexDirection: 'row',
    gap: 30,
  },
  text: {
    fontSize: sizes.text16,
  },
});
