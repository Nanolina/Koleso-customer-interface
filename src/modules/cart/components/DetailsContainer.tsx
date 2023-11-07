import { StyleSheet, Text, View } from 'react-native';
import { PriceContainer } from '../../../components/PriceContainer';
import { sizes } from '../../../consts';
import { gapBetweenDetails } from '../consts';
import { Detail } from '../ui/Detail';
import { QuantityContainer } from './QuantityContainer';

export const DetailsContainer = ({ item, quantity }) => {
  return (
    <View style={styles.container}>
      <PriceContainer
        price={item.price}
        oldPrice={item.oldPrice}
        priceSize={sizes.text16}
      />

      <Text style={styles.title}>{item.title}</Text>
      <View>
        <Detail name="Size" detail={item.size} />
        <Detail name="Color" detail={item.color} />
      </View>

      <QuantityContainer quantity={quantity} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    gap: gapBetweenDetails,
    paddingLeft: 10,
  },
  title: {
    fontWeight: 'bold',
    fontSize: sizes.text16,
  },
});
