import { FontAwesome5 } from '@expo/vector-icons';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import {
  ICartState,
  setAddressDelivery,
} from '../../../../redux/slices/cartSlice';
import { colors, sizes } from '../../../consts';

interface IAddress {
  id: string;
  address: string;
}

interface IAddressProps {
  address: IAddress;
  hasMarker?: boolean;
}

export const Address: React.FC<IAddressProps> = ({
  address,
  hasMarker,
}: any) => {
  const addressDelivery = useSelector(
    (state: { cart: ICartState }) => state.cart.addressDelivery
  );
  const dispatch = useDispatch();

  return (
    <TouchableOpacity onPress={() => dispatch(setAddressDelivery(address))}>
      <View style={styles.container}>
        {hasMarker || address.id === addressDelivery?.id ? (
          <FontAwesome5
            name="map-marker-alt"
            size={sizes.iconSizeMin}
            color={colors.main}
          />
        ) : null}
        <Text style={styles.text}>{address.address}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 10,
  },
  text: {
    fontSize: sizes.text18,
  },
});
