import { StyleSheet, View } from 'react-native';
import { Footer } from '../components/common/Footer';
import { Header } from '../components/common/Header';

const MainScreen = () => {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.mainContent}></View>
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mainContent: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default MainScreen;
