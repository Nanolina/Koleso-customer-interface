import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { useSelector } from 'react-redux';
import { courier, pickupPoint } from '../../../../consts';
import { savedAddresses } from '../../../../mockData';
import { toggleDelivery } from '../../../../redux/slices/cartSlice';
import { ButtonsGroup } from '../../../components/ButtonsGroup';
import { PriceInfoContainer } from '../../../components/PriceInfoContainer';
import { addressPickUpPoint, courierServices, css } from '../../../consts';
import { Hr } from '../../../ui/Hr';
import { Address } from '../ui/Address';
import { ExtraInfoCourier } from './ExtraInfoCourier';

export const Checkout = () => {
  const navigation: any = useNavigation();

  const { delivery } = useSelector((state: any) => state.cart);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1 }}
    >
      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={css.form.container}
      >
        <ButtonsGroup
          options={[
            { text: pickupPoint, value: pickupPoint },
            { text: courier, value: courier },
          ]}
          currentState="delivery"
          toggleFunction={toggleDelivery}
          slice="cart"
        />

        {delivery === pickupPoint ? (
          <Address address={addressPickUpPoint} hasMarker />
        ) : (
          savedAddresses.map((address) => (
            <Address address={address} key={address.id} />
          ))
        )}

        {delivery === courier && <ExtraInfoCourier />}

        <Hr />
        <PriceInfoContainer
          isPurchase={true}
          quantity={1}
          priceForProducts={100}
          hasDiscount={true}
          discount={50}
          courierServices={delivery === courier && courierServices}
          totalPrice={55}
        />
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
