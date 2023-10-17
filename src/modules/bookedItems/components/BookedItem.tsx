import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ImageContainer } from '../../../components/ImageContainer';
import { StoreDetails } from '../../../components/StoreDetails';
import { StoreDetailsButton } from '../../../components/StoreDetailsButton';
import { TextInfoContainer } from '../../../components/TextInfoContainer';
import { css } from '../../../consts';
import { BookedModal } from '../../modal';
import { UpperText } from '../../returns/ui/UpperText';

export const BookedItem = ({ item, isModalVisible, onClose }) => {
  const [storeDetails, setStoreDetails] = useState(false);

  return (
    <View style={css.return.container}>
      {isModalVisible && <BookedModal onClose={onClose} />}
      <UpperText
        number={item.book.number}
        date={item.book.date}
        text="Booking from"
      />
      <View style={styles.centerContainer}>
        <ImageContainer image={item.image} />
        <TextInfoContainer item={item} />
      </View>

      <View style={styles.bottomContainer}>
        <Text style={styles.text}>
          {item.book.quantity} {item.book.quantity > 1 ? 'pcs' : 'pc'}
        </Text>
        {item.book.statusPayment === 'Paid' && (
          <Text style={styles.paid}>{item.book.statusPayment}</Text>
        )}

        {item.book.statusPayment === 'Not paid' && (
          <Text style={styles.notPaid}>{item.book.statusPayment}</Text>
        )}
      </View>

      <StoreDetailsButton onPress={() => setStoreDetails(!storeDetails)} />

      {storeDetails && <StoreDetails item={item} />}
    </View>
  );
};

const styles = StyleSheet.create({
  centerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  text: {
    fontSize: css.size.text15,
    fontWeight: 'bold',
    paddingLeft: 5,
  },
  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  paid: {
    fontSize: css.size.text18,
    fontWeight: 'bold',
    color: css.colors.green,
  },
  notPaid: {
    fontSize: css.size.text18,
    fontWeight: 'bold',
    color: css.colors.darkRed,
  },
});
