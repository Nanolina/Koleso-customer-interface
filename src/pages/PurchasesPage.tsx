import { useTranslation } from 'react-i18next';
import { productCards } from '../../mockData';
import { Container } from '../components/Container';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { Purchases } from '../modules/purchases';
import { CentralContainer } from '../ui/CentralContainer';

export const PurchasesPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <Header title={t('myAccount.purchases')} hasButtonBack />
      <CentralContainer isPadding={true} isMinPadding={true}>
        <Purchases data={productCards} />
      </CentralContainer>
      <Footer />
    </Container>
  );
};
