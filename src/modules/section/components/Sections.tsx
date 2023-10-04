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
      style={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: css.padding,
    width: '100%',
  },
});
