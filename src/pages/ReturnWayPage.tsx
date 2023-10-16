import { useRoute } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { selfReturn } from '../../consts';
import { Container } from '../components/Container';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { ReturnWay } from '../modules/returns';
import { CentralContainer } from '../ui/CentralContainer';

export const ReturnWayPage = () => {
  const route: any = useRoute();
  const { item } = route.params;

  const { way } = useSelector((state: any) => state.return);

  return (
    <Container>
      <Header title={way === selfReturn ? selfReturn : 'Return by courier'} />
      <CentralContainer isPadding={true} isMinPadding={true}>
        <ReturnWay item={item} />
      </CentralContainer>
      <Footer />
    </Container>
  );
};
