import React from 'react';
import { KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { useSelector } from 'react-redux';
import { courier, pickupPoint } from '../../../../consts';
import { savedAddresses } from '../../../../mockData';
import { ICartState, toggleDelivery } from '../../../../redux/slices/cartSlice';
import { ButtonsGroup } from '../../../components/ButtonsGroup';
import { PriceInfoContainer } from '../../../components/PriceInfoContainer';
import { addressPickUpPoint, courierServices, css } from '../../../consts';
import { Hr } from '../../../ui/Hr';
import { ReturnForm } from '../../returns';
import { IOrderProcessingProps } from '../types';
import { Address } from '../ui/Address';
import { ExtraInfoCourier } from './ExtraInfoCourier';

export const OrderProcessing: React.FC<IOrderProcessingProps> = React.memo(
  ({ item, isReturn }) => {
    const delivery = useSelector(
      (state: { cart: ICartState }) => state.cart.delivery
    );

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

          {isReturn && <ReturnForm item={item} />}

          <Hr />
          <PriceInfoContainer
            quantity={1}
            priceForProducts={100}
            hasDiscount={true}
            discount={50}
            courierServices={delivery === courier && courierServices}
            totalPrice={55}
            isReturn={isReturn}
          />
        </ScrollView>
      </KeyboardAvoidingView>
    );
  }
);
