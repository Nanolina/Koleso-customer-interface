import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors, sizes } from '../../../../consts';
import { ITitleContainerProps } from '../../types';

export const TitleContainer: React.FC<ITitleContainerProps> = React.memo(
  ({ seller, title }) => {
    return (
      <View>
        <Text style={styles.seller}>{seller}</Text>
        <Text style={styles.title}>{title}</Text>
      </View>
    );
  }
);

const styles = StyleSheet.create({
  seller: {
    fontSize: sizes.text15,
    textAlign: 'center',
    fontFamily: 'OpenSans_400Regular_Italic',
    color: colors.gray,
  },
  title: {
    fontSize: sizes.text15,
    textAlign: 'center',
  },
});
