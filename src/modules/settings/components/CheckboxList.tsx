import React, { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { StyleSheet, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../../redux/rootReducer';
import { resetValue, setValue } from '../../../../redux/slices/settingsSlice';
import { colors } from '../../../consts';
import { Button } from '../../../ui/Button';
import { CheckboxItem } from '../../../ui/CheckboxItem';
import { data } from '../data';

export const CheckboxList: React.FC = () => {
  const { i18n, t } = useTranslation();
  const dispatch = useDispatch();

  const gender = useSelector(
    (state: RootState) => state.settings.gender as string
  );

  const items = data.genders;

  const renderItem = useCallback(
    (item: string) => {
      return (
        <CheckboxItem
          key={item}
          text={t(`settings.${item.toLowerCase()}`)}
          isSelected={item === gender}
          onToggle={() => dispatch(setValue({ key: 'gender', value: item }))}
        />
      );
    },
    [gender, dispatch, i18n.language]
  );

  return (
    <View>
      <View style={styles.button}>
        <Button
          text={t('reset')}
          onPress={() => dispatch(resetValue({ key: 'gender' }))}
          width="50%"
          textColor={colors.main}
          backgroundColor={colors.white}
          isBold={false}
          hasShadow
        />
      </View>
      {items.map(renderItem)}
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'flex-end',
    padding: 8,
  },
});
