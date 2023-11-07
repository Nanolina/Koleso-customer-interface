import { FontAwesome5 } from '@expo/vector-icons';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { setAddressDelivery } from '../../../../redux/slices/cartSlice';
import { colors, sizes } from '../../../consts';

export const Address = ({ address, hasMarker }: any) => {
  const { addressDelivery } = useSelector((state: any) => state.cart);
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
