import { useNavigation, useRoute } from '@react-navigation/native';
import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Container } from '../components/Container';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { colors, css, currency } from '../consts';
import { OrderProcessing } from '../modules/checkout';
import { ReturnModal } from '../modules/modal';
import { Button } from '../ui/Button';
import { CentralContainer } from '../ui/CentralContainer';

export const OrderProcessingPage = () => {
  const navigation: any = useNavigation();
  const [openModal, setOpenModal] = useState(false);

  const route: any = useRoute();
  const { title, item } = route.params;

  const isReturn = title === 'Return';

  return (
    <Container>
      <Header title={title} />
      <CentralContainer isPadding={true} isMinPadding={true}>
        <OrderProcessing item={item} isReturn={isReturn} />
      </CentralContainer>
      <View style={styles.buttonContainer}>
        <Button
          text={isReturn ? 'Return' : 'Proceed payment'}
          onPress={
            isReturn
              ? () => setOpenModal(!openModal)
              : () => navigation.navigate('PaymentPage')
          }
          backgroundColor={colors.orange}
          width="90%"
          extra={`55 ${currency}`}
        />
      </View>
      <Footer />

      {openModal && (
        <ReturnModal
          onClose={() => {
            setOpenModal(!openModal);
            navigation.navigate('ReturnsPage');
          }}
        />
      )}
    </Container>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
  },
});
