import { Container } from '../../components/Container';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { Login } from '../../modules/auth';
import { CentralContainer } from '../../ui/CentralContainer';

export const LoginPage = () => {
  return (
    <Container>
      <Header title="Log in" />
      <CentralContainer isPadding={true}>
        <Login />
      </CentralContainer>
      <Footer />
    </Container>
  );
};
