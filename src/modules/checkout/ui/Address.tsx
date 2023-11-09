import { FontAwesome5 } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import {
  ICartState,
  setAddressDelivery,
} from '../../../../redux/slices/cartSlice';
import { colors, sizes } from '../../../consts';
import { IAddressProps } from '../types';

export const Address: React.FC<IAddressProps> = React.memo(
  ({ address, hasMarker }) => {
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
  }
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 10,
  },
  text: {
    fontSize: sizes.text18,
  },
});
