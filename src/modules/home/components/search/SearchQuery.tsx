import { EvilIcons } from '@expo/vector-icons';
import { StyleSheet, Text, View } from 'react-native';
import { css } from '../../../../consts';
import { DeleteText } from '../../ui/search/DeleteText';

export const SearchQuery = ({ query }) => {
  return (
    <View key={query.id} style={styles.queryRow}>
      <View style={styles.textWithIcon}>
        <EvilIcons
          name="clock"
          size={css.iconSizeMin}
          color={css.colors.main}
        />
        <Text style={styles.queryText}>{query.name}</Text>
      </View>
      <DeleteText query={query} />
    </View>
  );
};

const styles = StyleSheet.create({
  queryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  queryText: {
    fontSize: css.size.text16,
  },
  textWithIcon: {
    flexDirection: 'row',
    gap: 4,
    alignItems: 'center',
  },
});
