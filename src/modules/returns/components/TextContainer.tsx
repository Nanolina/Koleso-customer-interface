import { StyleSheet, Text, View } from 'react-native';
import { css, currency } from '../../../consts';
import { Info } from '../ui/Info';

export const TextContainer = ({ item }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{item.title}</Text>

      {item.color && <Info text="Color" info={item.color} />}
      {item.size && <Info text="Size" info={item.size} />}

      <Text style={styles.price}>
        {item.price} {currency}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 2,
  },
  title: {
    fontSize: css.size.text15,
    textAlign: 'left',
    fontWeight: 'bold',
  },
  price: {
    fontSize: css.size.text18,
    fontWeight: 'bold',
  },
});
