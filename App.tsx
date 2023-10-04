import {
  OpenSans_400Regular,
  OpenSans_400Regular_Italic,
  OpenSans_600SemiBold,
  OpenSans_700Bold,
  useFonts,
} from '@expo-google-fonts/open-sans';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';
import store from './redux/store';
import { CategoriesPage } from './src/pages/CategoriesPage';
import { Home } from './src/pages/Home';
import { SectionsPage } from './src/pages/SectionsPage';
import { SubcategoriesPage } from './src/pages/SubcategoriesPage';

export default function App() {
  const Stack = createStackNavigator();

  // Fonts
  let [fontsLoaded] = useFonts({
    OpenSans_400Regular,
    OpenSans_600SemiBold,
    OpenSans_700Bold,
    OpenSans_400Regular_Italic,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="SectionsPage" component={SectionsPage} />
          <Stack.Screen name="CategoriesPage" component={CategoriesPage} />
          <Stack.Screen
            name="SubcategoriesPage"
            component={SubcategoriesPage}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
