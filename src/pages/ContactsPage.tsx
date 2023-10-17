import { Container } from '../components/Container';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { Contacts } from '../modules/contacts';
import { Finances } from '../modules/finances';
import { CentralContainer } from '../ui/CentralContainer';

export const ContactsPage = () => {
  return (
    <Container>
      <Header title="Contacts" />
      <CentralContainer isPadding={true} isMinPadding={true}>
        <Contacts />
      </CentralContainer>
      <Footer />
    </Container>
  );
};
