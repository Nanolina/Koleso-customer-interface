import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { addField } from '../../../../redux/slices/checkoutSlice';
import { DatePicker } from '../../../components/DatePicker';
import { TextWithInput } from '../../../components/TextWithInput';
import { minDate } from '../consts';
import { Note } from '../ui/Note';
import { TimePicker } from './TimePicker';

export const Form = () => {
  const dispatch = useDispatch();
  const { name, phone, city, street, house, apartment, date, time, note } =
    useSelector((state: any) => state.checkout);

  const validRangeDate = React.useMemo(() => {
    return {
      startDate: minDate,
    };
  }, [minDate]);

  return (
    <>
      <TextWithInput
        text="Surname, first name, patronymic of the recipient"
        value={name}
        onChangeText={(text) =>
          dispatch(addField({ field: 'name', value: text }))
        }
        autoComplete="name"
      />
      <TextWithInput
        text="Phone"
        value={phone}
        onChangeText={(text) =>
          dispatch(addField({ field: 'phone', value: text }))
        }
        autoComplete="tel"
        inputMode="tel"
      />
      <TextWithInput
        text="City"
        value={city}
        onChangeText={(text) =>
          dispatch(addField({ field: 'city', value: text }))
        }
      />
      <TextWithInput
        text="Street"
        value={street}
        onChangeText={(text) =>
          dispatch(addField({ field: 'street', value: text }))
        }
        autoComplete="street-address"
      />

      <View style={styles.container}>
        <TextWithInput
          text="House number"
          value={house}
          onChangeText={(text) =>
            dispatch(addField({ field: 'house', value: text }))
          }
          width="45%"
        />
        <TextWithInput
          text="Apartment number"
          value={apartment}
          onChangeText={(text) =>
            dispatch(addField({ field: 'apartment', value: text }))
          }
          width="45%"
        />
      </View>

      <View style={styles.container}>
        <DatePicker
          text="Date for delivery"
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
          value={time}
          onChange={(text) =>
            dispatch(addField({ field: 'time', value: text }))
          }
          width="45%"
        />
      </View>

      <Note
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
