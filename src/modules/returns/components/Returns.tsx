import { FlatList, StyleSheet, View } from 'react-native';
import { ItemRequest } from './ItemRequest';

export const Returns = ({ data }) => {
  const renderReturns = ({ item }) => {
    if (item.return) {
      return <ItemRequest item={item} key={item.id} />;
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderReturns}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 10,
  },
});
