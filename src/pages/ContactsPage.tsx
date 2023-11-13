import { useTranslation } from 'react-i18next';
import { Container } from '../components/Container';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { Contacts } from '../modules/contacts';
import { CentralContainer } from '../ui/CentralContainer';

export const ContactsPage: React.FC = () => {
  const { t } = useTranslation('translation', { keyPrefix: 'myAccount' });

  return (
    <Container>
      <Header title={t('contacts')} hasButtonBack />
      <CentralContainer isPadding={true} isMinPadding={true}>
        <Contacts />
      </CentralContainer>
      <Footer />
    </Container>
  );
};
