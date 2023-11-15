import { useTranslation } from 'react-i18next';
import { Container } from '../../components/Container';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { Filter } from '../../modules/filter';
import { CentralContainer } from '../../ui/CentralContainer';

export const FilterPage: React.FC = () => {
  const { t } = useTranslation('translation', { keyPrefix: 'filter' });

  return (
    <Container>
      <Header title={t('label')} hasButtonBack />
      <CentralContainer isPadding={true}>
        <Filter />
      </CentralContainer>
      <Footer />
    </Container>
  );
};
