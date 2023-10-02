import { FlatList, Platform, StyleSheet } from 'react-native';
import { css } from '../../../../consts';
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
      numColumns={Platform.OS === 'web' ? 3 : 2}
      contentContainerStyle={styles.listContainer}
    />
  );
};

const styles = StyleSheet.create({
  listContainer: {
    gap: 20,
    paddingVertical: Platform.OS === 'web' ? css.paddingWeb : css.padding,
    paddingHorizontal: css.padding,
    width: '100%',
    alignSelf: 'center',
  },
});
