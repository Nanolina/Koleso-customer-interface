import { Container } from '../components/Container';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { SignUp } from '../modules/signUp';
import { CentralContainer } from '../ui/CentralContainer';

export const SignUpPage = () => {
  return (
    <Container>
      <Header title="Sign up" hasButton={false} />
      <CentralContainer isPadding={true}>
        <SignUp />
      </CentralContainer>
      <Footer />
    </Container>
  );
};
