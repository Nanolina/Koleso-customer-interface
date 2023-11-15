import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { InfoItem } from '../../../components/InfoItem';
import { sizes } from '../../../consts';
import { IItemProps } from '../../../types';
import { PriceContainer } from '../../price';
import { gapBetweenDetails } from '../consts';

export const DetailsContainer: React.FC<{ item: IItemProps }> = React.memo(
  ({ item }) => {
    return (
      <View style={styles.container}>
        <PriceContainer
          price={item.price}
          oldPrice={item.oldPrice}
          priceSize={sizes.text16}
        />

        <Text style={styles.title}>{item.title}</Text>
        <InfoItem item={item} />
      </View>
    );
  }
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    gap: gapBetweenDetails,
    paddingLeft: 10,
  },
  title: {
    fontWeight: 'bold',
    fontSize: sizes.text16,
  },
});
