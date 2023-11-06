import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { css } from '../consts';
import { CheckboxItem } from '../ui/CheckboxItem';
import { Hr } from '../ui/Hr';
import { PriceInfo } from './PriceInfo';

export const PriceInfoContainer = ({
  isPurchase = true,
  quantity,
  priceForProducts,
  hasDiscount = false,
  discount = 0,
  courierServices,
  totalPrice,
}) => {
  const [isChecked, setIsChecked] = useState(false);

  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
  };

  return (
    <>
      <View style={css.priceInfoContainer}>
        <PriceInfo
          text={`Price for ${quantity} ${
            quantity === 1 ? 'product' : 'products'
          }`}
          price={priceForProducts}
        />
        {hasDiscount && isPurchase && (
          <PriceInfo text="Discount" price={`-${discount}`} />
        )}
        {courierServices ? (
          <PriceInfo text="Courier services" price={courierServices} />
        ) : (
          <PriceInfo text="Delivery" price="Free" hasCurrency={false} />
        )}
      </View>
      <Hr />
      <View style={css.priceInfoContainer}>
        <PriceInfo
          text={isPurchase ? 'Total cost' : 'Full price to refund'}
          price={totalPrice}
        />
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
    fontSize: css.size.text15,
    flexShrink: 1,
    flexWrap: 'wrap',
  },
});
