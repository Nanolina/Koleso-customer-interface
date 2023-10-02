import { EvilIcons } from '@expo/vector-icons';
import React, { useState } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { queries } from '../../mockData';
import { Header } from '../components/Header';
import { css } from '../consts';

export const Search = () => {
  const [searchQueries, setSearchQueries] = useState(queries);

  const handleClearAll = () => {
    setSearchQueries([]);
  };

  const handleClearQuery = (searchQuery) => {
    setSearchQueries(
      searchQueries.filter((query) => searchQuery.id !== query.id)
    );
  };

  return (
    <>
      <Header isBack={true} />
      <TouchableOpacity onPress={handleClearAll} style={styles.clearAllButton}>
        <Text style={styles.clearAllText}>Clear all</Text>
      </TouchableOpacity>

      <ScrollView>
        {searchQueries.map((query: any) => (
          <View key={query.id} style={styles.queryRow}>
            <View style={styles.textWithIcon}>
              <EvilIcons
                name="clock"
                size={css.iconSizeMin}
                color={css.colors.border}
              />
              <Text style={styles.queryText}>{query.name}</Text>
            </View>
            <TouchableOpacity onPress={() => handleClearQuery(query)}>
              <Text style={styles.deleteText}>✕</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  searchInput: {
    flex: 1,
    padding: 10,
    backgroundColor: css.colors.white,
    borderRadius: 4,
  },
  clearAllButton: {
    alignSelf: 'flex-end',
    padding: 10,
  },
  clearAllText: {
    color: css.colors.gray,
  },
  queryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  queryText: {
    fontSize: css.size.text16,
  },
  deleteText: {
    fontSize: css.size.text12,
    color: css.colors.gray,
  },
  textWithIcon: {
    flexDirection: 'row',
    gap: 4,
    alignItems: 'center',
  },
});
