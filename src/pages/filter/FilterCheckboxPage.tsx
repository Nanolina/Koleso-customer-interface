import { useRoute } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';
import { Container } from '../../components/Container';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { CheckboxList } from '../../modules/filter';
import { CentralContainer } from '../../ui/CentralContainer';

export const FilterCheckboxPage: React.FC = () => {
  const route: any = useRoute();
  const { title, items } = route.params;

  const { t } = useTranslation('translation', { keyPrefix: 'filter' });

  return (
    <Container>
      <Header title={t(`${title}.label`)} hasButtonBack />
      <CentralContainer isPadding>
        <CheckboxList title={title} items={items} />
      </CentralContainer>
      <Footer />
    </Container>
  );
};
