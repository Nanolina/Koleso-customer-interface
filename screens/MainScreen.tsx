import { LinearGradient } from 'expo-linear-gradient';
import {
  Dimensions,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { Icon } from 'react-native-elements';
import { borderRadius, colors } from '../assets/css';

const { width, height } = Dimensions.get('window');

const MainScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <LinearGradient
          colors={[colors.pink, colors.purple]}
          style={styles.gradientBackground}
          start={{ x: 1, y: 0 }}
          end={{ x: 1, y: 1 }}
        />
        <Text style={styles.headerText}>Main</Text>
        <View style={styles.searchBar}>
          <Icon name="search" size={20} color="#D404FF" />
          <TextInput
            style={styles.input}
            placeholder="Search..."
            placeholderTextColor="#808080"
          />
        </View>
      </View>

      <View style={styles.mainContent}></View>
      
      <View style={styles.footer}>
    <LinearGradient
      colors={[colors.pink, colors.purple]}
      style={styles.gradientBackground}
      start={{ x: 1, y: 0 }}
      end={{ x: 1, y: 1 }}
    />
    <View style={styles.iconContainer}>
      <Icon name="home" size={20} color="#fff" />
      <Icon name="search" size={20} color="#fff" />
      <Icon name="notifications" size={20} color="#fff" />
      <Icon name="shopping-cart" size={20} color="#fff" />
      <Icon name="favorite" size={20} color="#fff" />
      <Icon name="person" size={20} color="#fff" />
    </View>
  </View>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    height: height / 7,
    justifyContent: 'center',
    alignItems: 'center',
    width: width,
    paddingBottom: 15,
    paddingLeft: 15,
    paddingRight: 15,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    position: 'relative',
  },
  gradientBackground: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    opacity: 0.55,
  },
  headerText: {
    fontFamily: 'OpenSans_700Bold',
    fontSize: 20,
    color: 'white',
    textShadowOffset: { width: -1, height: -1 },
    textShadowRadius: 1,
    textShadowColor: '#000',
    padding: 10,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#D404FF',
    borderRadius: borderRadius,
    paddingLeft: 10,
    backgroundColor: 'white',
    width: '100%',
  },
  input: {
    height: 40,
    flex: 1,
    paddingLeft: 10,
  },
  mainContent: {
    flex: 1,
    backgroundColor: 'white',
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  footer: {
    height: height / 15,
    justifyContent: 'center',
    alignItems: 'center',
    width: width,
    padding: 10,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    position: 'relative',
  },
});

export default MainScreen;
