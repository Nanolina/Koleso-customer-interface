import { useTranslation } from 'react-i18next';
import { Container } from '../components/Container';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { Finances } from '../modules/finances';
import { CentralContainer } from '../ui/CentralContainer';

export const FinancesPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <Header title={t('myAccount.finances')} hasButtonBack />
      <CentralContainer isPadding={true} isMinPadding={true}>
        <Finances />
      </CentralContainer>
      <Footer />
    </Container>
  );
};
