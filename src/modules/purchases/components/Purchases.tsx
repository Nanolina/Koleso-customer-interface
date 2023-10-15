import { FlatList, Platform, StyleSheet } from 'react-native';
import { Purchase } from './Purchase';

export const Purchases = ({ data }) => {
  const renderPurchases = ({ item }) => <Purchase item={item} key={item.id} />;

  return (
    <FlatList
      data={data}
      renderItem={renderPurchases}
      keyExtractor={(item) => item.id}
      numColumns={Platform.OS === 'web' ? 3 : 2}
      style={styles.listContainer}
    />
  );
};

const styles = StyleSheet.create({
  listContainer: {
    gap: 20,
    paddingBottom: 20,
  },
});
