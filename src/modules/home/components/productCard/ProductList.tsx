import { FlatList, Platform, StyleSheet } from 'react-native';
import { ProductCard } from './ProductCard';

export const ProductList = ({ data }) => {
  const renderProductCard = ({ item }) => (
    <ProductCard {...item} key={item.id} />
  );

  return (
    <FlatList
      data={data}
      renderItem={renderProductCard}
      keyExtractor={(item) => item.id}
      numColumns={Platform.OS === 'web' ? 5 : 2}
      contentContainerStyle={styles.listContainer}
    />
  );
};

const styles = StyleSheet.create({
  listContainer: {
    gap: 20,
    paddingVertical: 5,
  },
});
