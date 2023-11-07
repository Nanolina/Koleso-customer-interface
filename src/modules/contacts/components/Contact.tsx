import { Image, StyleSheet, Text, View } from 'react-native';
import { colors, css } from '../../../consts';
import { Button } from '../../../ui/Button';

export const Contact = ({ contact }) => {
  return (
    <Button
      width={230}
      border={true}
      backgroundColor={colors.white}
      textColor={colors.black}
      text={
        <View style={styles.container}>
          <Image source={contact.image} style={styles.image} />
          <Text style={styles.text}>{contact.text}</Text>
        </View>
      }
    />
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
