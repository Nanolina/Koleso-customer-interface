import { Container } from '../components/Container';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { Form } from '../modules/address';
import { CentralContainer } from '../ui/CentralContainer';

export const AddressForm: React.FC = () => {
  return (
    <Container>
      <Header title="Add an address" hasButtonBack />
      <CentralContainer isPadding={true} isMinPadding={true}>
        <Form />
      </CentralContainer>
      <Footer />
    </Container>
  );
};
