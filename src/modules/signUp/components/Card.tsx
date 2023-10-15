import { Image, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { css } from '../../../consts';

export const Card = ({ card }) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Image source={card.image} style={styles.image} />
      <Text style={styles.text}>{card.text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: css.colors.main,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
    borderRadius: css.borderRadiusMax,
    padding: css.padding,
  },
  text: {
    fontSize: css.size.text18,
    fontWeight: 'bold',
  },
  image: {
    width: 40,
    height: 40,
  },
});
