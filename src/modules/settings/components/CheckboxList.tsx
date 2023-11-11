import React, { useCallback } from 'react';
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
  ({ title, items }) => {
    const dispatch = useDispatch();
    const { gender, language } = useSelector(
      (state: RootState) => state.settings as ISettingsState
    );

    const renderItem = useCallback(
      (item) => {
        let isSelected;
        let key;

        if (title === 'Gender') {
          key = 'gender';
          isSelected = gender === item;
        } else if (title === 'Language') {
          key = 'language';
          isSelected = language === item;
        }

        return (
          <CheckboxItem
            key={item}
            text={item}
            isSelected={isSelected}
            onToggle={() =>
              dispatch(
                setValue({
                  key,
                  value: item,
                })
              )
            }
          />
        );
      },
      [gender, language, dispatch, setValue]
    );

    return (
      <ScrollView>
        <View style={styles.button}>
          {title === 'Gender' && (
            <Button
              text="Reset"
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
