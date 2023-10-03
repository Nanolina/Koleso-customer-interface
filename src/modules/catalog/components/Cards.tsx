import React from 'react';
import { FlatList, Platform, StyleSheet } from 'react-native';
import { css } from '../../../consts';
import { cards } from '../cards';
import { Card } from './Card';

export const Cards: React.FC = () => (
  <FlatList
    data={cards}
    renderItem={({ item }) => <Card card={item} />}
    keyExtractor={(item) => item.id}
    numColumns={Platform.OS === 'web' ? 5 : 3}
    style={styles.container}
  />
);

const styles = StyleSheet.create({
  container: {
    paddingVertical: Platform.OS === 'web' ? css.paddingWeb : 0,
    paddingHorizontal: css.padding,
    width: '100%',
  },
});
