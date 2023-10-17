import { View } from 'react-native';
import { css } from '../consts';
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
  return (
    <>
      <View style={css.priceInfoContainer}>
        <PriceInfo
          text={`Price for ${quantity} ${
            quantity === 1 ? 'product' : 'products'
          }`}
          price={priceForProducts}
        />
        {hasDiscount && isPurchase && <PriceInfo text="Discount" price={`-${discount}`} />}
        <PriceInfo text="Courier services" price={courierServices} />
      </View>
      <Hr />
      <View style={css.priceInfoContainer}>
        <PriceInfo
          text={isPurchase ? 'Total cost' : 'Full price to refund'}
          price={totalPrice}
        />
      </View>
    </>
  );
};
