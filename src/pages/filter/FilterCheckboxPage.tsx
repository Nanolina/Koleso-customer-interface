import { useRoute } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { toggleColor } from '../../../redux/slices/filterSlice';
import { Container } from '../../components/Container';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { CheckboxList, data } from '../../modules/filter';
import { CentralContainer } from '../../ui/CentralContainer';

export const FilterCheckboxPage = () => {
  const route: any = useRoute();
  const { title } = route.params;

  const selectedColors = useSelector((state: any) => state.filter.colors);

  return (
    <Container>
      <Header title={title} />
      <CentralContainer isPadding={true}>
        <CheckboxList
          items={data.colors}
          selectedItems={selectedColors}
          onToggleItem={toggleColor}
        />
      </CentralContainer>
      <Footer />
    </Container>
  );
};
