import React from 'react';
import { useTranslation } from 'react-i18next';
import { StyleSheet, Text, View } from 'react-native';
import { InfoItem } from '../../../components/InfoItem';
import { colors, sizes } from '../../../consts';
import { IItemProps } from '../../../types';
import { Hr } from '../../../ui/Hr';
import { DateText } from '../ui/DateText';

export const TextContainer: React.FC<{ item: IItemProps }> = React.memo(
  ({ item }) => {
    return (
      <View style={styles.container}>
        <View style={styles.infoContainer}>
          <Text style={styles.seller}>{item.seller}</Text>
          <Text style={styles.title}>{item.title}</Text>
          <InfoItem item={item} />
        </View>

        <DateText item={item} />

        <Hr />
      </View>
    );
  }
);

const styles = StyleSheet.create({
  container: {
    gap: 2,
    padding: 5,
  },
  infoContainer: {
    height: 100,
  },
  seller: {
    fontSize: sizes.text15,
    textAlign: 'center',
    fontFamily: 'OpenSans_400Regular_Italic',
    color: colors.gray,
  },
  title: {
    paddingBottom: 10,
    fontSize: sizes.text15,
    textAlign: 'center',
  },
});
