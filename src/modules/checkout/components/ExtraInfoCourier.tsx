import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { addField } from '../../../../redux/slices/checkoutSlice';
import { DatePicker } from '../../../components/DatePicker';
import { colors, minDate } from '../../../consts';
import { Button } from '../../../ui/Button';
import { Hr } from '../../../ui/Hr';
import { Note } from '../../../ui/Note';
import { AddingAddressText } from '../ui/AddingAddressText';
import { TimePicker } from './TimePicker';

export const ExtraInfoCourier = () => {
  const navigation: any = useNavigation();
  const dispatch = useDispatch();

  const { date, time, note } = useSelector((state: any) => state.checkout);

  const validRangeDate = React.useMemo(() => {
    return {
      startDate: minDate,
    };
  }, [minDate]);

  return (
    <>
      <Button
        text={<AddingAddressText />}
        backgroundColor={colors.lightGray}
        textColor={colors.black}
        isBold={false}
        onPress={() => navigation.navigate('AddressForm')}
      />
      <Hr />
      <View style={styles.container}>
        <DatePicker
          text="Date"
          value={date}
          onChange={(text) =>
            dispatch(
              addField({
                field: 'date',
                value: text.toISOString(),
              })
            )
          }
          validRange={validRangeDate}
          width="45%"
        />

        <TimePicker
          text="Time"
          value={time}
          onChange={(text) =>
            dispatch(addField({ field: 'time', value: text }))
          }
          width="45%"
        />
      </View>

      <Note
        title="Note"
        placeholder="Write notes for the courier..."
        value={note}
        onChangeText={(text) =>
          dispatch(addField({ field: 'note', value: text }))
        }
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
