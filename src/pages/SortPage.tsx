import { useTranslation } from 'react-i18next';
import { Container } from '../components/Container';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { SortComponents } from '../modules/sort';
import { CentralContainer } from '../ui/CentralContainer';

export const SortPage: React.FC = () => {
  const { t } = useTranslation('translation', { keyPrefix: 'sort' });

  return (
    <Container>
      <Header title={t('label')} hasButtonBack />
      <CentralContainer isPadding={true} isMinPadding={true}>
        <SortComponents />
      </CentralContainer>
      <Footer />
    </Container>
  );
};
