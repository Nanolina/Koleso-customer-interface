import { Container } from '../../components/Container';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { SignUpPhoneEmail } from '../../modules/auth';
import { CentralContainer } from '../../ui/CentralContainer';

export const SignUpPhoneEmailPage = () => {
  return (
    <Container>
      <Header title="Sign up" hasButtonBack />
      <CentralContainer isPadding={true}>
        <SignUpPhoneEmail />
      </CentralContainer>
      <Footer />
    </Container>
  );
};
