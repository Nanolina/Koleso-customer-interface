import { useNavigation } from '@react-navigation/native';
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import { useSelector } from 'react-redux';
import { courier } from '../../../../consts';
import { addField } from '../../../../redux/slices/checkoutSlice';
import { Form } from '../../../components/Form';
import { PriceInfoContainer } from '../../../components/PriceInfoContainer';
import { css } from '../../../consts';
import { Button } from '../../../ui/Button';
import { Hr } from '../../../ui/Hr';

export const Checkout = () => {
  const navigation: any = useNavigation();

  const { name, phone, city, street, house, apartment, date, time, note } =
    useSelector((state: any) => state.checkout);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1 }}
    >
      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={css.form.container}
      >
        <View style={styles.buttonContainer}>
          <Button text={courier} />
        </View>

        <Form
          name={name}
          phone={phone}
          city={city}
          street={street}
          house={house}
          apartment={apartment}
          date={date}
          time={time}
          note={note}
          addField={addField}
          textDate="Date for delivery"
          textTime="Delivery time"
        />
        <Hr />

        <PriceInfoContainer
          isPurchase={true}
          quantity={1}
          priceForProducts={100}
          hasDiscount={true}
          discount={50}
          courierServices={5}
          totalPrice={55}
        />

        <View style={styles.buttonPayment}>
          <Button
            text="Proceed payment"
            onPress={() => navigation.navigate('PaymentPage')}
            width="50%"
            backgroundColor={css.colors.orange}
          />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    alignItems: 'flex-end',
  },
  buttonPayment: {
    alignItems: 'flex-end',
  },
});
