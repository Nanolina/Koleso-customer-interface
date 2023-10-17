import { Container } from '../components/Container';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { ReturnByCourierForm } from '../modules/returns';
import { CentralContainer } from '../ui/CentralContainer';

export const ReturnByCourierFormPage = () => {
  return (
    <Container>
      <Header title="Return by courier" />
      <CentralContainer isPadding={true} isMinPadding={true}>
        <ReturnByCourierForm />
      </CentralContainer>
      <Footer />
    </Container>
  );
};
