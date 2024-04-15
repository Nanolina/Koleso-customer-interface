import { useCallback } from 'react';
import { FlatList, Platform, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import { IRootState } from '../../../../redux/rootReducer';
import { ProductCard } from './ProductCard';

export const ProductList: React.FC = () => {
  const { items: products } = useSelector(
    (state: IRootState) => state.products
  );

  const renderProductCard = useCallback(
    ({ item }) => <ProductCard item={item} key={item.id} />,
    []
  );

  return (
    <FlatList
      data={products}
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
