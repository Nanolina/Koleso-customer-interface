import { Container } from '../../components/Container';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { SignUp } from '../../modules/auth';
import { CentralContainer } from '../../ui/CentralContainer';

export const SignUpPage = () => {
  return (
    <Container>
      <Header title="Sign up" />
      <CentralContainer isPadding={true}>
        <SignUp />
      </CentralContainer>
      <Footer />
    </Container>
  );
};
