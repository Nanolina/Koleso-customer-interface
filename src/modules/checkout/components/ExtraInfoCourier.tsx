import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native';
import React, { useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { StyleSheet, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { addField } from '../../../../redux/slices/checkoutSlice';
import { DatePicker } from '../../../components/DatePicker';
import { colors, minDate } from '../../../consts';
import { Button } from '../../../ui/Button';
import { Hr } from '../../../ui/Hr';
import { Note } from '../../../ui/Note';
import { AddingAddressText } from '../../address';
import { ICheckoutState } from '../types';

export const ExtraInfoCourier: React.FC = () => {
  const navigation: NavigationProp<ParamListBase> = useNavigation();
  const dispatch = useDispatch();

  const { t } = useTranslation('translation', {
    keyPrefix: 'orderProcessing',
  });

  const { date, note } = useSelector(
    (state: { checkout: ICheckoutState }) => state.checkout
  );

  const validRangeDate = useMemo(
    () => ({
      startDate: minDate,
    }),
    [minDate]
  );

  const handleDateChange = useCallback(
    (text: Date) => {
      dispatch(
        addField({
          field: 'date',
          value: text.toISOString(),
        })
      );
    },
    [dispatch]
  );

  const handleNoteChange = useCallback(
    (text: string) => {
      dispatch(addField({ field: 'note', value: text }));
    },
    [dispatch]
  );

  const handleAddressFormNavigation = useCallback(() => {
    navigation.navigate('AddressForm');
  }, [navigation]);

  return (
    <>
      <Button
        text={<AddingAddressText />}
        backgroundColor={colors.lightGray}
        textColor={colors.black}
        isBold={false}
        onPress={handleAddressFormNavigation}
      />
      <Hr />
      <View style={styles.container}>
        <DatePicker
          text="Date"
          value={date}
          onChange={handleDateChange}
          validRange={validRangeDate}
        />
      </View>

      <Note
        title="Note"
        placeholder="Write notes for the courier..."
        value={note}
        onChangeText={handleNoteChange}
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
