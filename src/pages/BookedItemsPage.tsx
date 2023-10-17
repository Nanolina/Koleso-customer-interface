import { productCards } from '../../mockData';
import { Container } from '../components/Container';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { BookedItems } from '../modules/bookedItems';
import { CentralContainer } from '../ui/CentralContainer';

export const BookedItemsPage = () => {
  return (
    <Container>
      <Header title="Booked items" />
      <CentralContainer isPadding={true} isMinPadding={true}>
        <BookedItems data={productCards} />
      </CentralContainer>
      <Footer />
    </Container>
  );
};
