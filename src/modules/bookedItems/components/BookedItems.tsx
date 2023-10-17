import { FlatList } from 'react-native';
import { BookedItem } from './BookedItem';

export const BookedItems = ({ data }) => {
  const renderBookedItems = ({ item }) => {
    if (item.book) {
      return <BookedItem item={item} key={item.id} />;
    }
  };

  return (
    <FlatList
      data={data}
      renderItem={renderBookedItems}
      keyExtractor={(item) => item.id}
    />
  );
};
