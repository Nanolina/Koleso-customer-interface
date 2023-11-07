import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { css, sizes } from '../consts';
import { CheckboxItem } from '../ui/CheckboxItem';
import { Hr } from '../ui/Hr';
import { PriceInfo } from './PriceInfo';

export const PriceInfoContainer = ({
  quantity,
  priceForProducts,
  hasDiscount = false,
  discount,
  courierServices,
  totalPrice,
  isReturn = false,
}) => {
  const [isChecked, setIsChecked] = useState(false);

  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
  };

  return (
    <>
      <View style={css.priceInfoContainer}>
        <PriceInfo
          text={
            isReturn
              ? 'Refundable amount'
              : `Price for ${quantity} ${
                  quantity === 1 ? 'product' : 'products'
                }`
          }
          price={priceForProducts}
        />
        {hasDiscount && !isReturn && (
          <PriceInfo text="Discount" price={`-${discount}`} />
        )}
        {courierServices ? (
          <PriceInfo text="Courier services" price={courierServices} />
        ) : (
          !isReturn && (
            <PriceInfo text="Delivery" price="Free" hasCurrency={false} />
          )
        )}
      </View>
      <Hr />
      <View style={css.priceInfoContainer}>
        <PriceInfo text={'Total amount'} price={totalPrice} />
      </View>
      <CheckboxItem
        item="I agree to the terms and conditions of the Marketplace Terms of Use and Return Policy"
        isSelected={isChecked}
        onToggle={toggleCheckbox}
        styleText={styles.text}
      />
    </>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: sizes.text15,
    flexShrink: 1,
    flexWrap: 'wrap',
  },
});
