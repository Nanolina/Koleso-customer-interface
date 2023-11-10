import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { colors } from '../../../consts';
import { IItemProps } from '../../../types';

export const DateText: React.FC<{ item: IItemProps }> = React.memo(
  ({ item }) => {
    return (
      <>
        {item.delivery && (
          <Text style={styles.delivered}>Delivered: {item.delivery?.date}</Text>
        )}
        {item?.return?.date && (
          <Text style={styles.returned}>Returned: {item?.return?.date}</Text>
        )}
      </>
    );
  }
);

const styles = StyleSheet.create({
  delivered: {
    color: colors.green,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  returned: {
    color: colors.darkRed,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
