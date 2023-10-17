import { useState } from 'react';
import { productCards } from '../../mockData';
import { Container } from '../components/Container';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { BookedItems } from '../modules/bookedItems';
import { CentralContainer } from '../ui/CentralContainer';

export const BookedItemsPage = () => {
  // true = mock data
  const [isModalVisible, setModalVisible] = useState(true);

  return (
    <Container>
      <Header title="Booked items" />
      <CentralContainer isPadding={true} isMinPadding={true}>
        <BookedItems
          data={productCards}
          isModalVisible={isModalVisible}
          onClose={setModalVisible}
        />
      </CentralContainer>
      <Footer />
    </Container>
  );
};
