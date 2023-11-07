import { StyleSheet, Text, View } from 'react-native';
import { colors, sizes } from '../../../consts';

export const TitleContainer = ({ seller, title }) => {
  return (
    <View>
      <Text style={styles.seller}>{seller}</Text>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  seller: {
    fontSize: sizes.text15,
    textAlign: 'center',
    fontFamily: 'OpenSans_400Regular_Italic',
    color: colors.gray,
  },
  title: {
    fontSize: sizes.text15,
    textAlign: 'center',
  },
});
