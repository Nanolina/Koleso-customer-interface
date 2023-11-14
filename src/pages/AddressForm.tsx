import { useTranslation } from 'react-i18next';
import { Container } from '../components/Container';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { Form } from '../modules/address';
import { CentralContainer } from '../ui/CentralContainer';

export const AddressForm: React.FC = () => {
  const { t } = useTranslation('translation', {
    keyPrefix: 'address',
  });

  return (
    <Container>
      <Header title={t('addAddress')} hasButtonBack />
      <CentralContainer isPadding={true} isMinPadding={true}>
        <Form />
      </CentralContainer>
      <Footer />
    </Container>
  );
};
