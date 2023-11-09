import { useCallback } from 'react';
import { FlatList, Platform, StyleSheet } from 'react-native';
import { IItemProps } from '../../../../mockData';
import { ProductCard } from './ProductCard';

export const ProductList: React.FC<{ data: IItemProps[] }> = ({ data }) => {
  const renderProductCard = useCallback(
    ({ item }) => <ProductCard item={item} key={item.id} />,
    []
  );

  return (
    <FlatList
      data={data}
      renderItem={renderProductCard}
      keyExtractor={(item) => item.id}
      numColumns={Platform.OS === 'web' ? 3 : 2}
      style={styles.listContainer}
    />
  );
};

const styles = StyleSheet.create({
  listContainer: {
    gap: 20,
  },
});
