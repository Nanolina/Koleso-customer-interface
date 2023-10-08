import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { addField } from '../../../../redux/slices/checkoutSlice';
import { ButtonGradient } from '../../../ui/ButtonGradient';
import { Note } from '../ui/Note';
import { TextWithInput } from './TextWithInput';

export const Checkout = () => {
  const { name, phone, city, street, house, apartment, day, time, note } =
    useSelector((state: any) => state.checkout);
  const dispatch = useDispatch();

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1 }}
    >
      <ScrollView style={{ flex: 1 }} contentContainerStyle={styles.container}>
        <View style={styles.buttonContainer}>
          <ButtonGradient text="Courier" />
        </View>
        <TextWithInput
          text="Surname, first name, patronymic of the recipient"
          value={name}
          onChangeText={(text) =>
            dispatch(addField({ field: 'name', value: text }))
          }
        />
        <TextWithInput
          text="Phone"
          value={phone}
          onChangeText={(text) =>
            dispatch(addField({ field: 'phone', value: text }))
          }
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
        />
        <View style={styles.twoColumnContainer}>
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

        <View style={styles.twoColumnContainer}>
          <TextWithInput
            text="Day for delivery"
            value={day}
            onChangeText={(text) =>
              dispatch(addField({ field: 'day', value: text }))
            }
            width="45%"
          />
          <TextWithInput
            text="Delivery time"
            value={time}
            onChangeText={(text) =>
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
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 20,
  },
  buttonContainer: {
    alignItems: 'flex-end',
  },
  twoColumnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
