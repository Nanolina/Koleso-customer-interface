import { Container } from '../components/Container';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { Services } from '../modules/myAccount';
import { CentralContainer } from '../ui/CentralContainer';

export const MyAccount = () => {
  return (
    <Container>
      <Header title="My account" hasButton={false} />
      <CentralContainer isPadding={true} isMinPadding={true}>
        <Services />
      </CentralContainer>
      <Footer />
    </Container>
  );
};
