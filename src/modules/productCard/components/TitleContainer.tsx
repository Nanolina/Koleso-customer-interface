import { StyleSheet, Text, View } from 'react-native';
import { css } from '../../../consts';

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
    fontSize: css.size.text15,
    textAlign: 'center',
    fontFamily: 'OpenSans_400Regular_Italic',
    color: css.colors.gray,
  },
  title: {
    fontSize: css.size.text15,
    textAlign: 'center',
  },
});
