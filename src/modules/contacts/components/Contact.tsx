import { Image, StyleSheet, Text, View } from 'react-native';
import { css } from '../../../consts';
import { ButtonWithBorder } from '../../../ui/ButtonWithBorder';

export const Contact = ({ contact }) => {
  return (
    <ButtonWithBorder widthBox={230} heightBox={60}>
      <View style={styles.container}>
        <Image source={contact.image} style={styles.image} />
        <Text style={styles.text}>{contact.text}</Text>
      </View>
    </ButtonWithBorder>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
  },
  text: {
    fontWeight: 'bold',
    fontSize: css.size.text15,
  },
  image: {
    width: 40,
    height: 40,
  },
});
