import { FlatList, StyleSheet, View } from 'react-native';
import { ButtonsRequest } from './ButtonsRequest';
import { Return } from './Return';

export const Returns = ({ data }) => {
  const renderReturns = ({ item }) =>
    item.return && <Return item={item} key={item.id} />;

  return (
    <View style={styles.container}>
      <ButtonsRequest />
      <FlatList
        data={data}
        renderItem={renderReturns}
        keyExtractor={(item) => item.id}
        style={styles.listContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 10,
  },
  listContainer: {
    gap: 20,
    paddingBottom: 20,
  },
});
