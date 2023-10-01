import { StyleSheet, View } from 'react-native';
import { Container } from '../components/Container';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';

export const MainScreen = () => {
  return (
    <Container>
      <Header />
      <View style={styles.mainContent}></View>
      <Footer />
    </Container>
  );
};

const styles = StyleSheet.create({
  mainContent: {
    flex: 1,
    backgroundColor: 'white',
  },
});
