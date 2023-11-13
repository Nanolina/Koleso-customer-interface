import React, { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { ScrollView, StyleSheet, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../../redux/rootReducer';
import {
  ISettingsState,
  resetValue,
  setValue,
} from '../../../../redux/slices/settingsSlice';
import { colors } from '../../../consts';
import { Button } from '../../../ui/Button';
import { CheckboxItem } from '../../../ui/CheckboxItem';
import { ICheckboxListProps } from '../types';

export const CheckboxList: React.FC<ICheckboxListProps> = React.memo(
  ({ title, items, keyType }) => {
    const { t, i18n } = useTranslation();
    const dispatch = useDispatch();

    const settings = useSelector(
      (state: RootState) => state.settings as ISettingsState
    );

    const isSelected = useCallback(
      (item) => {
        if (keyType === 'language') {
          return i18n.language === item;
        } else {
          return settings[keyType] === item;
        }
      },
      [settings, keyType, i18n.language]
    );

    const changeLanguage = useCallback(
      (language: string) => {
        i18n.changeLanguage(language);
      },
      [i18n]
    );

    const onToggle = useCallback(
      (item) => {
        if (keyType === 'language') {
          changeLanguage(item);
        } else if (keyType === 'gender') {
          dispatch(setValue({ key: keyType, value: item }));
        }
      },
      [changeLanguage, dispatch, keyType]
    );

    const renderItem = useCallback(
      (item) => {
        return (
          <CheckboxItem
            key={item}
            text={t(item)}
            isSelected={isSelected(item)}
            onToggle={() => onToggle(item)}
          />
        );
      },
      [isSelected, t, onToggle]
    );

    return (
      <ScrollView>
        <View style={styles.button}>
          {title === 'Gender' && (
            <Button
              text={t('reset')}
              onPress={() => dispatch(resetValue({ key: 'gender' }))}
              width="50%"
              textColor={colors.main}
              backgroundColor={colors.white}
              isBold={false}
              hasShadow
            />
          )}
        </View>
        {items.map(renderItem)}
      </ScrollView>
    );
  }
);

const styles = StyleSheet.create({
  button: {
    alignItems: 'flex-end',
    padding: 8,
  },
});
