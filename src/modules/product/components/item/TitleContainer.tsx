import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors, sizes } from '../../../../consts';
import { ITitleContainerProps } from '../../types';

export const TitleContainer: React.FC<ITitleContainerProps> = React.memo(
  ({ title, seller }) => {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.seller}>{seller}</Text>
      </View>
    );
  }
);

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
  },
  title: {
    fontSize: sizes.title,
    fontWeight: 'bold',
  },
  seller: {
    fontSize: sizes.text16,
    fontFamily: 'OpenSans_400Regular_Italic',
    color: colors.gray,
  },
});
