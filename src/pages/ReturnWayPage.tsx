import { useRoute } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { deliveryPoint } from '../../consts';
import { Container } from '../components/Container';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { DeliveryPoint, ReturnByCourier } from '../modules/returns';
import { CentralContainer } from '../ui/CentralContainer';

export const ReturnWayPage = () => {
  const route: any = useRoute();
  const { item } = route.params;

  const { way } = useSelector((state: any) => state.return);

  return (
    <Container>
      <Header
        title={way === deliveryPoint ? deliveryPoint : 'Return by courier'}
      />
      <CentralContainer isPadding={true} isMinPadding={true}>
        {way === deliveryPoint ? (
          <DeliveryPoint item={item} />
        ) : (
          <ReturnByCourier item={item} />
        )}
      </CentralContainer>
      <Footer />
    </Container>
  );
};
