import { StyleSheet, Text, View } from 'react-native';
import { OpeningHours } from '../modules/cart/components/OpeningHours';
import { StoreDetail } from '../modules/cart/ui/StoreDetail';
import { ImagesSocialMedia } from '../ui/ImagesSocialMedia';

export const StoreDetails = ({ item, page = '' }) => {
  return (
    <View style={styles.container}>
      <StoreDetail text="Shop" detail={item.seller} />
      {item.address && <StoreDetail text="Address" detail={item.address} />}
      <View style={styles.phoneContainer}>
        {item.phone && <StoreDetail text="Phone" detail={item.phone} />}
        {item.socialMedia && (
          <ImagesSocialMedia socialMedia={item.socialMedia} />
        )}
      </View>
      {item.workingHours && <OpeningHours days={item.workingHours} />}
      {item.book && page !== 'return' && (
        <Text>
          The reservation will be held for {item.book.days} working days
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 10,
  },
  phoneContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
});
