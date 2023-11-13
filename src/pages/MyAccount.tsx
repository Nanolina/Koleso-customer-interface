import { useTranslation } from 'react-i18next';
import { Container } from '../components/Container';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { Services } from '../modules/myAccount';
import { CentralContainer } from '../ui/CentralContainer';

export const MyAccount: React.FC = () => {
  const { t } = useTranslation('translation', { keyPrefix: 'myAccount' });

  return (
    <Container>
      <Header title={t('label')} />
      <CentralContainer isPadding={true} isMinPadding={true}>
        <Services />
      </CentralContainer>
      <Footer />
    </Container>
  );
};
