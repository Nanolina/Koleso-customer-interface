import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { colors, sizes } from '../../../consts';
import { Button } from '../../../ui/Button';
import { IContactProps } from '../types';

export const Contact: React.FC<{ contact: IContactProps }> = React.memo(
  ({ contact }) => {
    return (
      <Button
        width={230}
        backgroundColor={colors.white}
        textColor={colors.black}
        onPress={() => {}}
        hasShadow
        text={
          <View style={styles.container}>
            <Image source={contact.image} style={styles.image} />
            <Text style={styles.text}>{contact.text}</Text>
          </View>
        }
      />
    );
  }
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
  },
  text: {
    fontWeight: 'bold',
    fontSize: sizes.text15,
  },
  image: {
    width: 40,
    height: 40,
  },
});
