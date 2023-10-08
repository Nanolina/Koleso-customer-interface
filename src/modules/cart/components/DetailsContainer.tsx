import { StyleSheet, Text, View } from 'react-native';
import { PriceContainer } from '../../../components/PriceContainer';
import { css } from '../../../consts';
import { gapBetweenDetails } from '../consts';
import { Detail } from '../ui/Detail';

export const DetailsContainer = ({ item }) => {
  return (
    <View style={styles.container}>
      <PriceContainer
        price={item.price}
        oldPrice={item.oldPrice}
        priceSize={css.size.text16}
      />

      <Text style={styles.title}>{item.title}</Text>
      <View>
        <Detail name="Size" detail={item.size} />
        <Detail name="Color" detail={item.color} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    gap: gapBetweenDetails,
  },
  title: {
    fontWeight: 'bold',
    fontSize: css.size.text18,
  },
});
