import { useNavigation, useRoute } from '@react-navigation/native';
import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { StyleSheet, View } from 'react-native';
import { productCards } from '../../mockData';
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
  const { t } = useTranslation();
  const navigation = useNavigation<OrderProcessingNavigationProp>();
  const route = useRoute<OrderProcessingRouteProp>();

  const [openModal, setOpenModal] = useState(false);

  const { screen, params } = route.params || {};
  const isReturn = screen === 'Return';
  const item = productCards.find((item) => item.id === params?.itemId);

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
      <Header
        title={
          isReturn
            ? `${t('return.label')} ${item?.title || ''}`
            : t('checkout.label')
        }
        hasButtonBack={true}
      />
      <CentralContainer isPadding={true} isMinPadding={true}>
        <OrderProcessing item={item} isReturn={isReturn} />
      </CentralContainer>
      <View style={styles.buttonContainer}>
        <Button
          text={isReturn ? t('return.label') : t('checkout.proceedPayment')}
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
