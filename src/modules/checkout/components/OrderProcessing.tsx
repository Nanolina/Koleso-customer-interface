import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
} from 'react-native';
import { useSelector } from 'react-redux';
import { courier, pickupPoint } from '../../../../consts';
import { savedAddresses } from '../../../../mockData';
import { ICartState, toggleDelivery } from '../../../../redux/slices/cartSlice';
import { ButtonsGroup } from '../../../components/ButtonsGroup';
import { addressPickUpPoint, courierServices } from '../../../consts';
import { Hr } from '../../../ui/Hr';
import { Address } from '../../address';
import { PriceInfoContainer } from '../../price';
import { ReturnForm } from '../../returns';
import { IOrderProcessingProps } from '../types';
import { ExtraInfoCourier } from './ExtraInfoCourier';

export const OrderProcessing: React.FC<IOrderProcessingProps> = React.memo(
  ({ item, isReturn }) => {
    const { t } = useTranslation();

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
          contentContainerStyle={styles.container}
        >
          <ButtonsGroup
            options={[
              { text: t('orderProcessing.pickupPoint'), value: pickupPoint },
              { text: t('orderProcessing.courier'), value: courier },
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

          {isReturn && <ReturnForm />}

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

const styles = StyleSheet.create({
  container: {
    gap: 20,
    paddingBottom: 20,
  },
});
