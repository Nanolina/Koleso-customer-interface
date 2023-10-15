import { StyleSheet, Text, View } from 'react-native';
import { css } from '../../../consts';
import { Hr } from '../../../ui/Hr';
import { DateText } from '../ui/DateText';

export const TextContainer = ({ item }) => {
  return (
    <View style={styles.container}>
      <View style={styles.infoContainer}>
        <Text style={styles.seller}>{item.seller}</Text>
        <Text style={styles.title}>{item.title}</Text>
        {item.color && (
          <Text style={styles.italicText}>
            Color: <Text style={styles.boldText}>{item.color}</Text>
          </Text>
        )}
        {item.size && (
          <Text style={styles.italicText}>
            Size: <Text style={styles.boldText}>{item.size}</Text>
          </Text>
        )}
      </View>

      <DateText item={item} />

      <Hr />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 2,
  },
  infoContainer: {
    height: 100,
  },
  seller: {
    fontSize: css.size.text15,
    textAlign: 'center',
    fontFamily: 'OpenSans_400Regular_Italic',
    color: css.colors.gray,
  },
  title: {
    fontSize: css.size.text15,
    textAlign: 'center',
  },
  italicText: {
    fontSize: css.size.text15,
    fontStyle: 'italic',
    textAlign: 'center',
  },
  boldText: {
    fontWeight: 'bold',
  },
});
