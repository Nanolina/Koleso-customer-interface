import { useTranslation } from 'react-i18next';
import { productCards } from '../../mockData';
import { Container } from '../components/Container';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { Returns } from '../modules/returns';
import { CentralContainer } from '../ui/CentralContainer';

export const ReturnsPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <Header title={t('myAccount.returns')} hasButtonBack />
      <CentralContainer isPadding={true} isMinPadding={true}>
        <Returns data={productCards} />
      </CentralContainer>
      <Footer />
    </Container>
  );
};
