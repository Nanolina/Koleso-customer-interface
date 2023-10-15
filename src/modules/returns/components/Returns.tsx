import { FlatList, StyleSheet, View } from 'react-native';
import { useSelector } from 'react-redux';
import { createRequest, myRequests } from '../../../../consts';
import { ButtonsRequest } from './ButtonsRequest';
import { Delivery } from './Delivery';
import { Return } from './Return';

export const Returns = ({ data }) => {
  const { request } = useSelector((state: any) => state.return);

  const renderReturns = ({ item }) => {
    if (item.return && request === myRequests) {
      return <Return item={item} key={item.id} />;
    }

    if (item.delivery && request === createRequest) {
      return <Delivery item={item} key={item.id} />;
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
