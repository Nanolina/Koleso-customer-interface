import React, { useCallback } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { IReturnsProps } from '../types';
import { Return } from './Return';

export const Returns: React.FC<IReturnsProps> = React.memo(({ data }) => {
  const renderReturns = useCallback(({ item }) => {
    if (item.return) {
      return <Return item={item} key={item.id} />;
    }
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderReturns}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    gap: 10,
  },
});
