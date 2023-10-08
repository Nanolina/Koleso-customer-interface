import { FlatList, Platform, StyleSheet } from 'react-native';
import { ProductCard } from './ProductCard';

export const ProductList = ({ data }) => {
  const renderProductCard = ({ item }) => (
    <ProductCard item={item} key={item.id} />
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
