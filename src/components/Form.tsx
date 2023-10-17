import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { minDate } from '../consts';
import { TimePicker } from '../modules/checkout/components/TimePicker';
import { Note } from '../ui/Note';
import { DatePicker } from './DatePicker';
import { TextWithInput } from './TextWithInput';

export const Form = ({
  name,
  phone,
  city,
  street,
  house,
  apartment,
  date,
  time,
  note,
  addField,
  textDate,
  textTime,
}) => {
  const dispatch = useDispatch();

  const validRangeDate = React.useMemo(() => {
    return {
      startDate: minDate,
    };
  }, [minDate]);

  return (
    <View style={styles.mainContainer}>
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
          text={textDate}
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
          text={textTime}
          value={time}
          onChange={(text) =>
            dispatch(addField({ field: 'time', value: text }))
          }
          width="45%"
        />
      </View>

      <Note
        title="Note"
        placeholder="Write notes for the store or courier..."
        value={note}
        onChangeText={(text) =>
          dispatch(addField({ field: 'note', value: text }))
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    gap: 10,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
