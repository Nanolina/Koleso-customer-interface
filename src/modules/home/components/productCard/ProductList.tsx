import { FlatList, StyleSheet } from 'react-native';
import { ProductCard } from './ProductCard';
import { Platform } from 'react-native';

export const ProductList = ({ data }) => {
  const renderProductCard = ({ item }) => (
    <ProductCard {...item} key={item.id} />
  );

  return (
    <FlatList
      data={data}
      renderItem={renderProductCard}
      keyExtractor={(item) => item.id}
      numColumns={Platform.OS === 'web' ? 4 : 2}
      contentContainerStyle={styles.listContainer}
    />
  );
};

const styles = StyleSheet.create({
  listContainer: {
    gap: 20,
    paddingTop: 5,
  },
});
