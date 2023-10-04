import React from 'react';
import { FlatList, Platform, StyleSheet } from 'react-native';
import { catalog } from '../../../../catalog';
import { css } from '../../../consts';
import { Section } from './Section';

export const Sections: React.FC = () => {
  return (
    <FlatList
      data={catalog}
      renderItem={({ item }) => <Section section={item} />}
      keyExtractor={(item) => item.id}
      numColumns={Platform.OS === 'web' ? 5 : 3}
      style={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: Platform.OS === 'web' ? css.paddingWeb : 0,
    paddingHorizontal: css.padding,
    width: '100%',
  },
});
