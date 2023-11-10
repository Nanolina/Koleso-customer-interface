import React, { useCallback } from 'react';
import { FlatList, Platform, StyleSheet } from 'react-native';
import { IPurchasesProps } from '../types';
import { Purchase } from './Purchase';
import { css } from '../../../consts';

export const Purchases: React.FC<IPurchasesProps> = React.memo(({ data }) => {
  const renderPurchases = useCallback(({ item }) => {
    return <Purchase item={item} key={item.id} />;
  }, []);

  return (
    <FlatList
      data={data}
      renderItem={renderPurchases}
      keyExtractor={(item) => item.id}
      numColumns={Platform.OS === 'web' ? 3 : 2}
      style={styles.listContainer}
    />
  );
});

const styles = StyleSheet.create({
  listContainer: {
    paddingBottom: css.paddingBottom,
  },
});
