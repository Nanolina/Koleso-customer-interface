import React, { useCallback } from 'react';
import { FlatList, View } from 'react-native';
import { css } from '../../../consts';
import { IReturnsProps } from '../types';
import { Return } from './Return';

export const Returns: React.FC<IReturnsProps> = React.memo(({ data }) => {
  const renderReturns = useCallback(({ item }) => {
    if (item.return) {
      return <Return item={item} key={item.id} />;
    }
  }, []);

  return (
    <View style={css.shadowContainer}>
      <FlatList
        data={data}
        renderItem={renderReturns}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
});
