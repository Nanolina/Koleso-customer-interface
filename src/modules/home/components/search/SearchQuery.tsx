import { EvilIcons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors, sizes } from '../../../../consts';
import { ISearchQueryProps } from '../../types';
import { DeleteText } from '../../ui/search/DeleteText';

export const SearchQuery: React.FC<ISearchQueryProps> = React.memo(
  ({ query }) => {
    return (
      <View style={styles.queryRow}>
        <View style={styles.textWithIcon}>
          <EvilIcons
            name="clock"
            size={sizes.iconSizeMin}
            color={colors.main}
          />
          <Text style={styles.queryText}>{query}</Text>
        </View>
        <DeleteText query={query} />
      </View>
    );
  }
);

const styles = StyleSheet.create({
  queryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  queryText: {
    fontSize: sizes.text16,
  },
  textWithIcon: {
    flexDirection: 'row',
    gap: 4,
    alignItems: 'center',
  },
});
