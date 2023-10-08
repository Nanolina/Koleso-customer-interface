import { StyleSheet, View } from 'react-native';
import { StoreDetail } from '../ui/StoreDetail';
import { OpeningHours } from './OpeningHours';

export const StoreDetails = ({ item }) => {
  return (
    <View style={styles.container}>
      <StoreDetail text="Shop" detail={item.seller} />
      {item.address && <StoreDetail text="Address" detail={item.address} />}
      {item.phone && <StoreDetail text="Phone" detail={item.phone} />}
      {item.workingHours && <OpeningHours days={item.workingHours} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 10,
  },
});
