import { useState } from 'react';
import { Container } from '../components/Container';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { Sections } from '../modules/catalog';
import { SearchQueries } from '../modules/home';
import { CentralContainer } from '../ui/CentralContainer';

export const SectionsPage: React.FC = () => {
  const [isEnabledSearch, setIsEnabledSearch] = useState(false);

  return (
    <Container>
      <Header
        isEnabledSearch={isEnabledSearch}
        setIsEnabledSearch={setIsEnabledSearch}
        showSearchBar
      />
      <CentralContainer isPadding={true} isMinPadding={true}>
        {isEnabledSearch && <SearchQueries />}
        {!isEnabledSearch && <Sections />}
      </CentralContainer>
      <Footer />
    </Container>
  );
};
