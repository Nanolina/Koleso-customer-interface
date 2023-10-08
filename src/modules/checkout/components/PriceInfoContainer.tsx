import { View } from 'react-native';
import { PriceInfo } from '../../../components/PriceInfo';
import { css } from '../../../consts';
import { Hr } from '../../../ui/Hr';

export const PriceInfoContainer = () => {
  return (
    <>
      <View style={css.priceInfoContainer}>
        <PriceInfo text="Price for 1 product" price="100" />
        <PriceInfo text="Discount" price="-50" />
        <PriceInfo text="Delivery" price="5" />
      </View>
      <Hr />
      <View style={css.priceInfoContainer}>
        <PriceInfo text="Total cost" price="55" />
      </View>
    </>
  );
};
