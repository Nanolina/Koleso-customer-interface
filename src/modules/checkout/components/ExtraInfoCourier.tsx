import { useNavigation } from '@react-navigation/native';
import React, { useCallback, useMemo } from 'react';
import { StyleSheet, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { addField } from '../../../../redux/slices/checkoutSlice';
import { DatePicker } from '../../../components/DatePicker';
import { colors, minDate } from '../../../consts';
import { Button } from '../../../ui/Button';
import { Hr } from '../../../ui/Hr';
import { Note } from '../../../ui/Note';
import { ICheckoutState } from '../types';
import { AddingAddressText } from '../ui/AddingAddressText';
import { TimePicker } from './TimePicker';

export const ExtraInfoCourier: React.FC = () => {
  const navigation: any = useNavigation();
  const dispatch = useDispatch();

  const { date, time, note } = useSelector(
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

  const handleTimeChange = useCallback(
    (text: string) => {
      dispatch(addField({ field: 'time', value: text }));
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
          width="45%"
        />

        <TimePicker
          text="Time"
          value={time}
          onChange={handleTimeChange}
          width="45%"
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
