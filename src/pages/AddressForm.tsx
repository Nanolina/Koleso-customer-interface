import { useSelector } from 'react-redux';
import { addField } from '../../redux/slices/checkoutSlice';
import { Container } from '../components/Container';
import { Footer } from '../components/Footer';
import { Form } from '../components/Form';
import { Header } from '../components/Header';
import { CentralContainer } from '../ui/CentralContainer';

export const AddressForm = () => {
  const { name, city, street, house, apartment } = useSelector(
    (state: any) => state.checkout
  );

  return (
    <Container>
      <Header title="Add an address" />
      <CentralContainer isPadding={true} isMinPadding={true}>
        <Form
          name={name}
          city={city}
          street={street}
          house={house}
          apartment={apartment}
          addField={addField}
        />
      </CentralContainer>
      <Footer />
    </Container>
  );
};
