import { useNavigation } from '@react-navigation/native';
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import { useDispatch } from 'react-redux';
import { toggleModal } from '../../../../redux/slices/paymentSlice';
import { css } from '../../../consts';
import { ButtonGradient } from '../../../ui/ButtonGradient';
import { ButtonGreen } from '../../../ui/ButtonGreen';
import { Hr } from '../../../ui/Hr';
import { Form } from './Form';
import { PriceInfoContainer } from './PriceInfoContainer';

export const Checkout = () => {
  const navigation: any = useNavigation();
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

        <Form />
        <Hr />

        <PriceInfoContainer />

        <View style={styles.buttonPayment}>
          <ButtonGreen
            text="Proceed payment"
            onPress={() => {
              dispatch(toggleModal(true));
              navigation.navigate('PaymentPage');
            }}
            width="50%"
          />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 20,
    paddingBottom: css.paddingBottom,
  },
  buttonContainer: {
    alignItems: 'flex-end',
  },
  buttonPayment: {
    alignItems: 'flex-end',
  },
});
