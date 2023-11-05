import { useRoute } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { pickupPoint } from '../../consts';
import { Container } from '../components/Container';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { PickupPoint, ReturnByCourier } from '../modules/returns';
import { CentralContainer } from '../ui/CentralContainer';

export const ReturnWayPage = () => {
  const route: any = useRoute();
  const { item } = route.params;

  const { way } = useSelector((state: any) => state.return);

  return (
    <Container>
      <Header title={way === pickupPoint ? pickupPoint : 'Return by courier'} />
      <CentralContainer isPadding={true} isMinPadding={true}>
        {way === pickupPoint ? (
          <PickupPoint item={item} />
        ) : (
          <ReturnByCourier item={item} />
        )}
      </CentralContainer>
      <Footer />
    </Container>
  );
};
