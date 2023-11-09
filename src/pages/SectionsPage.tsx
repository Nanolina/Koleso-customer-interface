import { useState } from 'react';
import { Container } from '../components/Container';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { SearchQueries } from '../modules/home';
import { Sections } from '../modules/section';
import { CentralContainer } from '../ui/CentralContainer';

export const SectionsPage = () => {
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
