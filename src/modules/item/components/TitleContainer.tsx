import { StyleSheet, Text, View } from 'react-native';
import { colors, css } from '../../../consts';

export const TitleContainer = ({ title, seller }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.seller}>{seller}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
  },
  title: {
    fontSize: css.size.title,
    fontWeight: 'bold',
  },
  seller: {
    fontSize: css.size.text16,
    fontFamily: 'OpenSans_400Regular_Italic',
    color: colors.gray,
  },
});
