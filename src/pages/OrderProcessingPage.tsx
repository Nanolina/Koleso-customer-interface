import { useNavigation, useRoute } from '@react-navigation/native';
import { useCallback, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Container } from '../components/Container';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { colors, currency } from '../consts';
import { OrderProcessing } from '../modules/checkout';
import { ReturnModal } from '../modules/modal';
import {
  OrderProcessingNavigationProp,
  OrderProcessingRouteProp,
} from '../types';
import { Button } from '../ui/Button';
import { CentralContainer } from '../ui/CentralContainer';

export const OrderProcessingPage: React.FC = () => {
  const navigation = useNavigation<OrderProcessingNavigationProp>();
  const route = useRoute<OrderProcessingRouteProp>();
  const [openModal, setOpenModal] = useState(false);

  const { title, item } = route.params;

  const isReturn = title === 'Return';

  const handlePress = useCallback(() => {
    if (isReturn) {
      setOpenModal(!openModal);
    } else {
      navigation.navigate('PaymentPage');
    }
  }, [isReturn, openModal, navigation]);

  const handleCloseModal = useCallback(() => {
    setOpenModal(!openModal);
    navigation.navigate('ReturnsPage');
  }, [openModal, navigation]);

  return (
    <Container>
      <Header title={title} hasButtonBack={true} />
      <CentralContainer isPadding={true} isMinPadding={true}>
        <OrderProcessing item={item} isReturn={isReturn} />
      </CentralContainer>
      <View style={styles.buttonContainer}>
        <Button
          text={isReturn ? 'Return' : 'Proceed payment'}
          onPress={handlePress}
          backgroundColor={colors.orange}
          width="90%"
          extra={`55 ${currency}`}
        />
      </View>
      <Footer />

      {openModal && <ReturnModal onClose={handleCloseModal} />}
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
