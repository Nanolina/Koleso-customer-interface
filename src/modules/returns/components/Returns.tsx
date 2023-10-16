import { FlatList, StyleSheet, View } from 'react-native';
import { useSelector } from 'react-redux';
import { createRequest, myRequests } from '../../../../consts';
import { ButtonsRequest } from './ButtonsRequest';
import { ItemFromCreateRequest } from './ItemFromCreateRequest';
import { ItemFromMyRequests } from './ItemFromMyRequests';

export const Returns = ({ data }) => {
  const { returns } = useSelector((state: any) => state.return);

  const renderReturns = ({ item }) => {
    if (item.return && returns === myRequests) {
      return <ItemFromMyRequests item={item} key={item.id} />;
    }

    if (item.delivery && returns === createRequest) {
      return <ItemFromCreateRequest item={item} key={item.id} />;
    }
  };

  return (
    <View style={styles.container}>
      <ButtonsRequest />
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
