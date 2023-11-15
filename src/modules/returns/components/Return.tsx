import React from 'react';
import { useTranslation } from 'react-i18next';
import { StyleSheet, View } from 'react-native';
import { ImageContainer } from '../../../components/ImageContainer';
import { colors, css } from '../../../consts';
import { IItemProps } from '../../../types';
import { BottomText } from '../ui/BottomText';
import { UpperText } from '../ui/UpperText';
import { TextInfoContainer } from './TextInfoContainer';

export const Return: React.FC<{ item: IItemProps }> = React.memo(({ item }) => {
  const { t } = useTranslation();

  return (
    <View style={styles.container}>
      <UpperText
        number={item.return.number}
        date={item.return.date}
        text={t('returns.request')}
      />
      <View style={styles.centerContainer}>
        <ImageContainer image={item.image} />
        <TextInfoContainer item={item} />
      </View>
      <BottomText statusMoney={item.return.statusMoney} />
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    borderRadius: 12,
    gap: 10,
    padding: 10,
    marginBottom: 10,
    ...css.shadow,
  },
  centerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
});
