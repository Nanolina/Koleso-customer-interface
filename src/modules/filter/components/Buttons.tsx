import React from 'react';
import { useTranslation } from 'react-i18next';
import { StyleSheet, Text, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { colors, sizes } from '../../../consts';
import { Button } from '../../../ui/Button';
import { IButtonsProps } from '../types';

export const Buttons: React.FC<IButtonsProps> = React.memo(
  ({ items, selectedItems, resetAll, selectAll }) => {
    const { t } = useTranslation();
    const dispatch = useDispatch();

    return (
      <View style={styles.container}>
        <Text style={styles.text}>{t('filter.selectedItems')}: {selectedItems.length}</Text>
        <View style={styles.buttonContainer}>
          {selectedItems.length === items.length ? (
            <Button
              text={t('resetAll')}
              onPress={() => dispatch(resetAll())}
              backgroundColor={colors.white}
              textColor={colors.main}
              isBold={false}
              hasShadow
            />
          ) : (
            <Button
              text={t('selectAll')}
              onPress={() => dispatch(selectAll())}
              backgroundColor={colors.white}
              textColor={colors.main}
              isBold={false}
              hasShadow
            />
          )}
        </View>
      </View>
    );
  }
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 20,
  },
  buttonContainer: {
    padding: 8,
  },
  text: {
    fontSize: sizes.text16,
    fontWeight: 'bold',
  },
});
